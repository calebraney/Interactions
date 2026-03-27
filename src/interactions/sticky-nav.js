import { attr, checkRunProp, getIxConfig } from '../utilities';

export const stickyNav = function () {
  //animation ID
  const ANIMATION_ID = 'stickynav';
  //elements
  const WRAP = '[data-ix-stickynav="wrap"]'; // the nav element (should be position: fixed or sticky)
  const HERO = '[data-ix-stickynav="hero"]'; // optional hero section — falls back to <main>, then a fixed scroll distance
  //options
  const HIDE_ON = 'data-ix-stickynav-hide-on'; // "scroll-down" (default), "scroll-up", or "none"
  const DURATION = 'data-ix-stickynav-duration'; // animation duration for show/hide (default 0.3)
  const EASE = 'data-ix-stickynav-ease'; // easing for show/hide (default 'power2.out')
  const SCROLL_THRESHOLD = 'data-ix-stickynav-threshold'; // minimum px scrolled in a direction before triggering (default 50)
  const BG_ACTIVE = 'data-ix-stickynav-bg-active'; // class added to nav after scrolling past hero (default 'is-scrolled')
  const HERO_BG_END = 'data-ix-stickynav-bg-end'; // ScrollTrigger end point that triggers the background class — e.g. 'bottom top' or '+=100' (default 'bottom top')
  const HIDDEN_CLASS = 'data-ix-stickynav-hidden-class'; // class added when nav is hidden (default 'is-hidden')
  const START_HIDDEN = 'data-ix-stickynav-start-hidden'; // if true, nav starts hidden and appears on first scroll-up (default false)
  const HIDE_OFFSET = 'data-ix-stickynav-hide-offset'; // px from top before hide behavior activates (default 100)

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  const wraps = [...document.querySelectorAll(WRAP)];
  if (wraps.length === 0) return;

  wraps.forEach((wrap) => {
    if (!wrap) return;

    //check if the run prop is set to true
    let runProp = checkRunProp(wrap, ANIMATION_ID);
    if (runProp === false) return;

    // Read options
    let hideOn = attr('scroll-down', wrap.getAttribute(HIDE_ON));
    let duration = attr(0.3, wrap.getAttribute(DURATION));
    let ease = attr('power2.out', wrap.getAttribute(EASE));
    let scrollThreshold = attr(50, wrap.getAttribute(SCROLL_THRESHOLD));
    let bgActiveClass = attr('is-scrolled', wrap.getAttribute(BG_ACTIVE));
    let hiddenClass = attr('is-hidden', wrap.getAttribute(HIDDEN_CLASS));
    let startHidden = attr(false, wrap.getAttribute(START_HIDDEN));
    let hideOffset = attr(100, wrap.getAttribute(HIDE_OFFSET));
    let bgEnd = attr('+=500', wrap.getAttribute(HERO_BG_END)); //either a certain pixel amount or when the hero reaches a certain point in the viewport

    // Get the nav height for the hide transform
    const navHeight = wrap.offsetHeight;

    // Internal state
    let isHidden = startHidden;
    let isScrolled = false;

    // Set initial state
    if (startHidden) {
      gsap.set(wrap, { yPercent: -100 });
      wrap.classList.add(hiddenClass);
    }

    // Utility to show/hide nav with GSAP (uses yPercent for GPU-accelerated transform)
    const showNav = function () {
      if (!isHidden) return;
      isHidden = false;
      wrap.classList.remove(hiddenClass);
      gsap.to(wrap, {
        yPercent: 0,
        duration: duration,
        ease: ease,
        overwrite: 'auto',
      });
    };
    const hideNav = function () {
      if (isHidden) return;
      isHidden = true;
      wrap.classList.add(hiddenClass);
      gsap.to(wrap, {
        yPercent: -100,
        duration: duration,
        ease: ease,
        overwrite: 'auto',
      });
    };

    //////////////////////////////
    // Direction-based show/hide
    if (hideOn !== 'none') {
      // Use ScrollTrigger for efficient scroll direction tracking
      // A single ScrollTrigger watching the full page with onUpdate is more performant
      // than a scroll event listener + manual direction math
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          // Don't hide when near the top of the page
          const scrollY = self.scroll();
          if (scrollY < hideOffset) {
            showNav();
            return;
          }

          const direction = self.direction; // 1 = down, -1 = up
          // Respect scroll threshold — only trigger after scrolling enough in one direction
          // self.getVelocity() returns px/second, which is more reliable than checking small deltas
          const velocity = Math.abs(self.getVelocity());
          if (velocity < scrollThreshold) return;

          if (hideOn === 'scroll-down') {
            // Default: hide on scroll down, show on scroll up
            if (direction === 1) {
              hideNav();
            } else {
              showNav();
            }
          } else if (hideOn === 'scroll-up') {
            // Inverted: show on scroll down, hide on scroll up
            if (direction === 1) {
              showNav();
            } else {
              hideNav();
            }
          }
        },
      });
    }

    //////////////////////////////
    // Background change after scrolling past hero
    // Priority: [data-ix-stickynav="hero"] → <main> → fixed scroll distance
    const triggerEl = document.querySelector(HERO);
    if (triggerEl) {
      // start is always 'top top' (trigger element's top at the viewport top) — this is the reference point.
      // the background class toggles when the end point is crossed, so the trigger position
      // (e.g. 'bottom top', '+=100') is set independently via the bgEnd option.
      ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top top',
        end: bgEnd,
        onLeave: () => {
          // scrolled past the end point — add the background class
          if (!isScrolled) {
            isScrolled = true;
            wrap.classList.add(bgActiveClass);
          }
        },
        onEnterBack: () => {
          // scrolled back above the end point — remove the background class
          if (isScrolled) {
            isScrolled = false;
            wrap.classList.remove(bgActiveClass);
          }
        },
      });
    } else {
      // No trigger element found — toggle based on a fixed scroll distance (nav height from top)
      ScrollTrigger.create({
        start: 0,
        end: navHeight,
        onLeave: () => {
          if (!isScrolled) {
            isScrolled = true;
            wrap.classList.add(bgActiveClass);
          }
        },
        onEnterBack: () => {
          if (isScrolled) {
            isScrolled = false;
            wrap.classList.remove(bgActiveClass);
          }
        },
      });
    }
  });
};
