import { attr, checkBreakpoints } from '../utilities';

export const logoTicker = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'logoticker';
  const WRAP = '[data-ix-logoticker="wrap"]';
  const LIST = '[data-ix-logoticker="list"]'; // put on the CMS list wrap element
  const REVERSE = 'data-ix-logoticker-reverse'; // needs to be set to true if reversed
  const DURATION = 'data-ix-logoticker-duration';
  const CHANGE_SPEED_ON_HOVER = 'data-ix-logoticker-accelerate';

  const wraps = document.querySelectorAll(WRAP);
  if (wraps.length === 0) return;
  wraps.forEach((wrap) => {
    //check to run on breakpoint
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    const lists = wrap.querySelectorAll(LIST);
    let reverse = attr(false, wrap.getAttribute(REVERSE));
    let duration = attr(30, wrap.getAttribute(DURATION));
    let accelerate = attr(false, wrap.getAttribute(CHANGE_SPEED_ON_HOVER));

    let direction = 1;
    if (reverse) {
      direction = -1;
    }
    let tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: 'none',
      },
    });
    tl.fromTo(
      lists,
      {
        xPercent: 0,
      },
      {
        xPercent: -100 * direction,
        duration: duration,
      }
    );
    if (accelerate) {
      wrap.addEventListener('mouseenter', (event) => {
        tl.timeScale(2);
      });
      wrap.addEventListener('mouseleave', (event) => {
        tl.timeScale(1);
      });
    }
  });
};
