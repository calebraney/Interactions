import {
  attr,
  stopScroll,
  checkContainer,
  getIxConfig,
  checkRunProp,
  getAttrConfig,
} from '../utilities';
import { createAnimation } from './animations';

/*
Required CSS — add to page <head>:
<style>
[data-ix-pagetransition="wrap"] {
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 9999;
}
</style>
*/

export const pageTransition = function (lenis) {
  const ANIMATION_ID = 'pagetransition';
  const ATTRIBUTE = 'data-ix-pagetransition';
  const WRAP_SEL = `[${ATTRIBUTE}="wrap"]`;
  const BG_SEL = `[${ATTRIBUTE}="background"]`;
  const ITEM_SEL = `[${ATTRIBUTE}="item"]`;

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  const wraps = [...document.querySelectorAll(WRAP_SEL)];
  if (wraps.length === 0) return;

  // Storage helper — returns true if the loader/transition should be skipped
  const STORAGE_KEY = 'ix-pagetransition-seen';
  const checkStorage = function (storageValue) {
    if (!storageValue) return false;
    if (storageValue === 'session') {
      if (sessionStorage.getItem(STORAGE_KEY)) return true;
      sessionStorage.setItem(STORAGE_KEY, '1');
      return false;
    }
    const dayMatch = storageValue.match(/^(\d+)d$/i);
    if (dayMatch) {
      const days = parseInt(dayMatch[1], 10);
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && Date.now() < parseInt(stored, 10) + days * 86400000) return true;
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch (_) {
        return false;
      }
      return false;
    }
    return false;
  };

  // checkLink — returns true if a link should trigger the transition
  const checkLink = function (link) {
    if (!link || link.tagName !== 'A') return false;
    const hostname = link.hostname;
    const target = link.target;
    const href = link.getAttribute('href');
    const playTransition = attr(true, link.getAttribute(ATTRIBUTE));
    if (
      !hostname ||
      hostname !== window.location.hostname ||
      (target && target === '_blank') ||
      !href ||
      href.includes('#') ||
      !playTransition
    ) {
      return false;
    }
    return true;
  };

  // buildTimeline — builds the IN animation (hidden → visible in GSAP's model).
  // isOut=true selects animate-out types per element; caller plays timeline in reverse for the actual out animation.
  const buildTimeline = function (wrap, config, isOut) {
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: config.duration, ease: config.ease },
    });

    const bg = wrap.querySelector(BG_SEL);
    const bgGap = bg ? attr(0, bg.getAttribute(`${ATTRIBUTE}-gap`)) : 0;
    if (bg) {
      const bgIn = attr('scale-y-up', bg.getAttribute(`${ATTRIBUTE}-animate`));
      const bgOut = attr(bgIn, bg.getAttribute(`${ATTRIBUTE}-animate-out`));
      const bgDuration = attr(config.duration, bg.getAttribute(`${ATTRIBUTE}-duration`));
      const bgEase = attr(config.ease, bg.getAttribute(`${ATTRIBUTE}-ease`));
      const bgPosition = attr('0', bg.getAttribute(`${ATTRIBUTE}-position`));
      createAnimation(tl, bg, isOut ? bgOut : bgIn, {
        duration: bgDuration,
        ease: bgEase,
        position: bgPosition,
      });
    }

    const items = [...wrap.querySelectorAll(ITEM_SEL)];
    if (isOut) items.reverse();
    items.forEach(function (item, index) {
      const animIn = attr('slide-down', item.getAttribute(`${ATTRIBUTE}-animate`));
      const animOut = attr(animIn, item.getAttribute(`${ATTRIBUTE}-animate-out`));
      const duration = attr(config.duration, item.getAttribute(`${ATTRIBUTE}-duration`));
      const ease = attr(config.ease, item.getAttribute(`${ATTRIBUTE}-ease`));
      const defaultPosition = isOut && index === 0 ? `>+${bgGap}` : '<0.2';
      const position = attr(defaultPosition, item.getAttribute(`${ATTRIBUTE}-position`));
      const stagger = attr(0, item.getAttribute(`${ATTRIBUTE}-stagger`));
      const target = stagger > 0 ? [...item.children] : item;
      createAnimation(tl, target, isOut ? animOut : animIn, { duration, ease, position, stagger });
    });

    return tl;
  };

  wraps.forEach(function (wrap, wrapIndex) {
    const runProp = checkRunProp(wrap, ANIMATION_ID);
    if (runProp === false) return;

    const config = getAttrConfig(wrap, ANIMATION_ID, {
      mode: 'transition', //transition or loader
      storage: '',
      duration: 0.8,
      ease: 'power3.out',
      delay: 1,
    });

    // Capture display value before any GSAP manipulation
    const wrapDisplay = getComputedStyle(wrap).display || 'flex';

    let isAnimating = false;
    let isDisabled = false;

    const hideWrap = function () {
      gsap.set(wrap, { display: 'none' });
    };

    const playOut = function (outDelay) {
      const tl = buildTimeline(wrap, config, true);
      tl.seek(tl.totalDuration()); // set to visible state synchronously before any frame is painted
      const dur = tl.totalDuration();
      gsap.delayedCall(outDelay, function () {
        tl.reverse();
      });
      gsap.delayedCall(outDelay + dur + 0.4, hideWrap);
    };

    if (config.mode === 'loader') {
      if (checkStorage(config.storage)) {
        hideWrap();
        return;
      }
      playOut(config.delay);
    } else {
      // transition mode: half delay on the new page before animating out
      playOut(config.delay / 2);

      // Only the first wrap handles link clicks to avoid duplicate listeners
      if (wrapIndex === 0) {
        document.querySelectorAll('a').forEach(function (link) {
          if (!checkLink(link)) return;
          const linkURL = link.getAttribute('href');
          link.addEventListener('click', function (e) {
            if (isAnimating || isDisabled) return;
            isAnimating = true;
            e.preventDefault();
            gsap.set(wrap, { display: wrapDisplay });
            const tl = buildTimeline(wrap, config, false);
            // half delay after IN animation completes, before navigating
            tl.eventCallback('onComplete', function () {
              gsap.delayedCall(config.delay / 2, function () {
                window.location.href = linkURL;
              });
            });
            stopScroll(lenis);
            tl.play();
          });
        });
      }
    }

    const breakpoint = attr('none', wrap.getAttribute(`data-ix-${ANIMATION_ID}-breakpoint`));
    checkContainer(wrap, breakpoint, function (match) {
      isDisabled = match;
    });
  });

  // Prevents back button bug on safari
  window.onpageshow = function (event) {
    if (event.persisted) window.location.reload();
  };
};
