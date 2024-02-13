import { attr } from './utilities';

export const textLinks = function () {
  //items
  const TXT_LINK_WRAP = '[data-ix-text-link="wrap"]';
  const TXT_LINK_FRONT = '[data-ix-text-link="front"]';
  const TXT_LINK_BACK = '[data-ix-text-link="back"]';
  const items = gsap.utils.toArray(TXT_LINK_WRAP);
  items.forEach((item) => {
    if (!item) return;
    const front = item.querySelector(TXT_LINK_FRONT);
    const back = item.querySelector(TXT_LINK_BACK);
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
