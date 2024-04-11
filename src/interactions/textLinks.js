import { attr, checkBreakpoints } from '../utilities';

export const textLinks = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'textlink';
  //elements
  const WRAP = '[data-ix-textlink="wrap"]';
  const FRONT = '[data-ix-textlink="front"]';
  const BACK = '[data-ix-textlink="back"]';
  //get items
  const items = gsap.utils.toArray(WRAP);
  items.forEach((item) => {
    if (!item) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //get front and back elements
    const front = item.querySelector(FRONT);
    const back = item.querySelector(BACK);
    if (!front || !back) return;
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.4,
        ease: 'power1.out',
      },
    });
    tl.fromTo(
      front,
      {
        y: '200%',
        rotateZ: 6,
      },
      {
        y: '0%',
        rotateZ: 0,
      }
    );
    tl.fromTo(
      back,
      {
        y: '0%',
        rotateZ: 0,
      },
      {
        y: '-200%',
        rotateZ: -6,
      },
      0
    );
    item.addEventListener('mouseover', function () {
      tl.play();
    });
    item.addEventListener('mouseleave', function () {
      tl.reverse();
    });
  });
};
