import { attr, checkRunProp } from '../utilities';

/*
CSS to include in page head:

<style>
  [data-ix-stickynav="wrap"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
</style>
*/

export const stickyNav = function () {
  //animation ID
  const ANIMATION_ID = 'stickynav';
  //elements
  const WRAP = '[data-ix-stickynav="wrap"]'; // the nav element (should be position: fixed or sticky)
  const HERO = '[data-ix-stickynav="hero"]'; // optional hero section — nav becomes opaque after scrolling past this
  //options
  const HIDE_ON = 'data-ix-stickynav-hide-on'; // "scroll-down" (default), "scroll-up", or "none"
  const DURATION = 'data-ix-stickynav-duration'; // animation duration for show/hide (default 0.3)
  const EASE = 'data-ix-stickynav-ease'; // easing for show/hide (default 'power2.out')
  const SCROLL_THRESHOLD = 'data-ix-stickynav-threshold'; // minimum px scrolled in a direction before triggering (default 50)
  const BG_ACTIVE = 'data-ix-stickynav-bg-active'; // class added to nav after scrolling past hero (default 'is-scrolled')
  const HIDDEN_CLASS = 'data-ix-stickynav-hidden-class'; // class added when nav is hidden (default 'is-hidden')
  const START_HIDDEN = 'data-ix-stickynav-start-hidden'; // if true, nav starts hidden and appears on first scroll-up (default false)
  const HIDE_OFFSET = 'data-ix-stickynav-hide-offset'; // px from top before hide behavior activates (default 100)

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
    const hero = document.querySelector(HERO);
    if (hero) {
      ScrollTrigger.create({
        trigger: hero,
        start: 'bottom top',
        onEnter: () => {
          // Scrolled past the hero — add the background class
          if (!isScrolled) {
            isScrolled = true;
            wrap.classList.add(bgActiveClass);
          }
        },
        onLeaveBack: () => {
          // Scrolled back above the hero — remove the background class
          if (isScrolled) {
            isScrolled = false;
            wrap.classList.remove(bgActiveClass);
          }
        },
      });
    } else {
      // If no hero element, use a simple scroll distance to toggle the background class
      // Default: add the class after scrolling down more than the nav's own height
      ScrollTrigger.create({
        start: navHeight,
        end: 'max',
        onEnter: () => {
          if (!isScrolled) {
            isScrolled = true;
            wrap.classList.add(bgActiveClass);
          }
        },
        onLeaveBack: () => {
          if (isScrolled) {
            isScrolled = false;
            wrap.classList.remove(bgActiveClass);
          }
        },
      });
    }
  });
};
