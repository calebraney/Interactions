import { attr, attrIfSet, checkBreakpoints } from '../utilities';

export const scrolling = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'scrolling';
  //elements
  const WRAP = `[data-ix-scrolling="wrap"]`;
  const TRIGGER = `[data-ix-scrolling="trigger"]`;
  const LAYER = '[data-ix-scrolling="layer"]';
  //timeline options
  const START = 'data-ix-scrolling-start';
  const END = 'data-ix-scrolling-end';
  const TABLET_START = 'data-ix-scrolling-start-tablet';
  const TABLET_END = 'data-ix-scrolling-end-tablet';
  const MOBILE_START = 'data-ix-scrolling-start-mobile';
  const MOBILE_END = 'data-ix-scrolling-end-mobile';
  const SCRUB = 'data-ix-scrolling-scrub';
  //tween options
  const POSITION = 'data-ix-scrolling-position'; // sequential by default, use "<" to start tweens together
  const X_START = 'data-ix-scrolling-x-start';
  const X_END = 'data-ix-scrolling-x-end';
  const Y_START = 'data-ix-scrolling-y-start';
  const Y_END = 'data-ix-scrolling-y-end';
  const SCALE_START = 'data-ix-scrolling-scale-start';
  const SCALE_END = 'data-ix-scrolling-scale-end';
  const WIDTH_START = 'data-ix-scrolling-width-start';
  const WIDTH_END = 'data-ix-scrolling-width-end';
  const HEIGHT_START = 'data-ix-scrolling-height-start';
  const HEIGHT_END = 'data-ix-scrolling-height-end';
  const ROTATE_X_START = 'data-ix-scrolling-rotate-x-start';
  const ROTATE_X_END = 'data-ix-scrolling-rotate-x-end';
  const ROTATE_Y_START = 'data-ix-scrolling-rotate-y-start';
  const ROTATE_Y_END = 'data-ix-scrolling-rotate-y-end';
  const ROTATE_Z_START = 'data-ix-scrolling-rotate-z-start';
  const ROTATE_Z_END = 'data-ix-scrolling-rotate-z-end';
  const OPACITY_START = 'data-ix-scrolling-opacity-start';
  const OPACITY_END = 'data-ix-scrolling-opacity-end';
  const CLIP_START = 'data-ix-scrolling-clip-start';
  const CLIP_END = 'data-ix-scrolling-clip-end';
  const CLIP_TYPE = 'data-ix-scrolling-clip-type';

  const scrollingItems = gsap.utils.toArray(WRAP);
  scrollingItems.forEach((scrollingItem) => {
    const layers = scrollingItem.querySelectorAll(LAYER);
    // return if items are null
    if (!scrollingItem || layers.length === 0) return;
    // find the target element if one exists, otherwise the parent is the target
    let trigger = scrollingItem.querySelector(TRIGGER);
    if (!trigger) {
      trigger = scrollingItem;
    }
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(scrollingItem, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //create variables from GSAP context
    let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;

    // default GSAP options for animation
    const tlSettings = {
      scrub: 0.5,
      start: 'top bottom',
      end: 'bottom top',
    };
    // get custom timeline settings or set them at the default
    tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(START));
    tlSettings.end = attr(tlSettings.end, scrollingItem.getAttribute(END));
    tlSettings.scrub = attr(tlSettings.scrub, scrollingItem.getAttribute(SCRUB));
    //conditionally update tablet and mobile values
    if (isTablet && scrollingItem.getAttribute(TABLET_START)) {
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_START));
    }
    if (isTablet && scrollingItem.getAttribute(TABLET_END)) {
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_END));
    }
    if (isMobile && scrollingItem.getAttribute(MOBILE_START)) {
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_START));
    }
    if (isMobile && scrollingItem.getAttribute(MOBILE_END)) {
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_END));
    }
    // create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: tlSettings.start,
        end: tlSettings.end,
        scrub: tlSettings.scrub,
        markers: false,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    //////////////////////
    // Adding tweens
    layers.forEach((layer) => {
      if (!layer) return;
      //objects for tween
      const varsFrom = {};
      const varsTo = {};

      //add properties to vars objects
      varsFrom.x = attrIfSet(X_START, '0%');
      varsTo.x = attrIfSet(X_END, '0%');
      varsFrom.y = attrIfSet(Y_START, '0%');
      varsTo.y = attrIfSet(Y_END, '0%');
      varsFrom.scale = attrIfSet(SCALE_START, 1);
      varsTo.scale = attrIfSet(SCALE_END, 1);
      varsFrom.width = attrIfSet(WIDTH_START, '0%');
      varsTo.width = attrIfSet(WIDTH_END, '0%');
      varsFrom.height = attrIfSet(HEIGHT_START, '0%');
      varsTo.height = attrIfSet(HEIGHT_END, '0%');
      varsFrom.rotateX = attrIfSet(ROTATE_X_START, 0);
      varsTo.rotateX = attrIfSet(ROTATE_X_END, 0);
      varsFrom.rotateY = attrIfSet(ROTATE_Y_START, 0);
      varsTo.rotateY = attrIfSet(ROTATE_Y_END, 0);
      varsFrom.rotateZ = attrIfSet(ROTATE_Z_START, 0);
      varsTo.rotateZ = attrIfSet(ROTATE_Z_END, 0);
      varsFrom.opacity = attrIfSet(OPACITY_START, 0);
      varsTo.opacity = attrIfSet(OPACITY_END, 0);
      //get clip path values (and allow keyword names light right, or full)
      const clipStart = getClipDirection(layer, CLIP_START, 'right');
      const clipEnd = getClipDirection(layer, CLIP_END, 'full');
      varsFrom.clipPath = attrIfSet(CLIP_START, clipStart);
      varsTo.clipPath = attrIfSet(CLIP_END, clipEnd);

      // get the position attribute
      const position = attr('<', layer.getAttribute(POSITION));

      //add tween
      let fromTween = tl.fromTo(layer, varsFrom, varsTo, position);
    });
  });
};
