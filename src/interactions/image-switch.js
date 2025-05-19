import { checkBreakpoints } from '../utilities';

export const imageSwitch = function (gsapContext) {
  const ANIMATION_ID = 'imageswitch';
  const WRAP = '[data-ix-imageswitch="wrap"]';
  const ITEM = '[data-ix-imageswitch="item"]';
  const IMAGE = '[data-ix-imageswitch="image"]';
  const LINK = '[data-ix-imageswitch="link"]';

  const wraps = [...document.querySelectorAll(WRAP)];
  if (!wraps.length === 0) return;
  wraps.forEach((wrap) => {
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //within each section
    const tabLinks = [...wrap.querySelectorAll(LINK)];
    const items = [...wrap.querySelectorAll(ITEM)];
    const images = [...wrap.querySelectorAll(IMAGE)];
    const ACTIVE_CLASS = 'is-active';
    // for each tab link add an event listener that will scroll to the correct id
    if (items.length === 0 || images.length === 0) return;

    //utility class to activate or de-activate item
    const activateItem = function (index, activate = true) {
      const image = images[index];
      // const tab = tabLinks[index]
      if (activate) {
        image.classList.add(ACTIVE_CLASS);
        // tab.classList.add(ACTIVE_CLASS);
      } else {
        image.classList.remove(ACTIVE_CLASS);
        // tab.classList.remove(ACTIVE_CLASS);
      }
    };
    // remove all active classes
    images.forEach((item) => item.classList.remove(ACTIVE_CLASS));
    //activate first item
    activateItem(0);
    // animate each item
    items.forEach((item, index) => {
      const image = images[index];
      //   const tab = tabLinks[index];
      if (!item || !image) return;
      const imageTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          markers: false,
          scrub: true,
          onEnter: () => {
            activateItem(index);
          },
          onLeave: () => {
            // don't remove class on leave of the last item
            if (index !== items.length - 1) {
              activateItem(index, false);
            }
            //   tab.classList.remove(ACTIVE_CLASS);
          },
          onEnterBack: () => {
            activateItem(index);
          },
          onLeaveBack: () => {
            // don't remove class on leaveback of the first item
            if (index !== 0) {
              activateItem(index, false);
            }
            //   tab.classList.remove(ACTIVE_CLASS);
          },
        },
      });
    });

    ///  /manage clicking of tab links
    //   tabLinks.forEach((button) => {
    //     if (!button) return;
    //     button.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       const clicked = e.target.closest('[data-ix-imageswitch="link"]');
    //       if (!clicked) return;
    //       // get the DOM element by the text content (scroll-target value)
    //       const target = clicked.getAttribute('cr-split-link');
    //       //click the element with an id matching the target
    //       const el = wrap.querySelector(`[data-ix-imageswitch="[item]="${target}"`);
    //       el.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'center',
    //       });
    //     });
    //   });
  });
};
