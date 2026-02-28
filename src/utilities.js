//utility function to stop the page from scrolling

export const stopScroll = function (lenis) {
  //non lenis version
  if (lenis) {
    //lenis version
    lenis.stop();
  } else {
    const body = document.querySelector('body');
    const NO_SCROLL_CLASS = 'no-scroll';
    body.classList.add(NO_SCROLL_CLASS);
  }
};
//utility function to start page  scrolling
export const startScroll = function (lenis) {
  //non lenis version
  if (lenis) {
    //lenis version
    lenis.start();
  } else {
    const body = document.querySelector('body');
    const NO_SCROLL_CLASS = 'no-scroll';
    body.classList.remove(NO_SCROLL_CLASS);
  }
};

// attribute value checker
export const attr = function (defaultVal, attrVal) {
  //get the type of the default
  const defaultValType = typeof defaultVal;
  if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
  if (attrVal?.toLowerCase() === 'true' && defaultValType === 'boolean') return true;
  if (attrVal?.toLowerCase() === 'false' && defaultValType === 'boolean') return false;
  if (isNaN(attrVal) && defaultValType === 'string') return attrVal;
  if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal;
  return defaultVal;
};
//function to process data attributes and return the correct value if set (or nothing if not set)
export const attrIfSet = function (item, attributeName, defaultValue) {
  const hasAttribute = item.hasAttribute(attributeName);
  const attributeValue = attr(defaultValue, item.getAttribute(attributeName));
  // if the attribute is not set retun, otherwise update the attribute
  // (alternatively, could just include the default value)
  if (hasAttribute) {
    return attributeValue;
  } else {
    return;
  }
};

//split text utility
export const runSplit = function (text, types = 'lines, words') {
  if (!text) return;
  let typeSplit = SplitText.create(text, { type: types, autoSplit: true });
  return typeSplit;
};

export const checkContainer = function (containerChild, breakpoint, callback, additionalParams) {
  let containerQuery = breakpoint;
  //for breakpoint keywords use global breakpoint values.
  if (breakpoint === 'medium') {
    containerQuery = '(width < 50em)';
  } else if (breakpoint === 'small') {
    containerQuery = '(width < 35em)';
  } else if (breakpoint === 'xsmall') {
    containerQuery = '(width < 20em)';
  }
  //if no container query is set run the ballback with a match of true.
  if (containerQuery === 'none') {
    callback(false, additionalParams);
  } else {
    //make a container query and run the callback function.
    containerChild.observeContainer(containerQuery, (match) => {
      callback(match, additionalParams);

      // //Breakpoint tracking
      // if (match) {
      //   console.log(match, containerChild);
      // } else {
      //   console.log(match, containerChild);
      // }
    });
  }
};

//check for attributes to stop animation on specific breakpoints
export const checkRunProp = function (item, animationID) {
  //exit if items aren't found
  if (!item || !animationID) {
    console.error(`GSAP check Run Error in ${animationID}`);
    // if you want this error to stop the interaction return false
    return;
  }
  const RUN = `data-ix-${animationID}-run`;
  //check breakpoints and quit function if set on specific breakpoints
  const run = attr(true, item.getAttribute(RUN));
  if (run === false) return false;
  // if no conditions match
  return true;
};

//check for attributes to stop animation on specific breakpoints
export const checkSiteAndPageRun = function (animationID) {
  //exit if items aren't found
  if (!animationID) {
    console.error(`No animationID provided to checkSiteAndPageRun`);
    return;
  }
  //Check if page run is set to false, if so return false to stop interaction
  const pageRunEl = document.querySelector(`[data-ix-${animationID}-page-run]`);
  const pageRun = attr(true, pageRunEl?.getAttribute(`data-ix-${animationID}-page-run`));

  //Check if page run is set to false, if so return false to stop interaction
  const siteRunEl = document.querySelector(`[data-ix-${animationID}-site-run]`);
  const siteRun = attr(true, siteRunEl?.getAttribute(`data-ix-${animationID}-site-run`));

  if (pageRun === false || siteRun === false) {
    document.querySelector('body').setAttribute(`data-ix-${animationID}-site-run`, 'false');
    return false;
  }

  //Alternate Version that checks CSS variables instead of data attributes

  // // Then check site-level CSS variable
  // const siteRunVar = window
  //   .getComputedStyle(document.documentElement)
  //   .getPropertyValue(`--interactions--${animationID}-run`);
  // const siteRun = attr(true, siteRunVar);
  // if (siteRun === false) return false;
  //If neither are set to false, return true to allow interaction to run
  return true;
};

//utility function to get the clipping direction of items (horizontal or vertical only)
export const getClipDirection = function (attributeValue) {
  const clipDirections = {
    left: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    right: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    top: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    bottom: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    full: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  };
  return clipDirections[attributeValue] || attributeValue;
};

export class ClassWatcher {
  constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, { attributes: true });
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback = (mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        let currentClassState = mutation.target.classList.contains(this.classToWatch);
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    }
  };
}

//utility for finding children of an element without display: contents
// will go down layer by layer until it finds children without that value.
export function getNonContentsChildren(item) {
  if (!item || !(item instanceof Element)) return [];

  const result = [];

  function processChildren(parent) {
    const children = Array.from(parent.children);
    for (const child of children) {
      const display = window.getComputedStyle(child).display;
      if (display === 'contents') {
        processChildren(child); // Recurse into children of 'contents' elements
      } else {
        result.push(child); // Keep non-'contents' element
      }
    }
  }

  processChildren(item);
  return result;
}

export const copyURL = function () {
  //get all copy clip elements
  const elements = [...document.querySelectorAll('[fs-copyclip-text]')];
  //if the value is set to URL, change the attribute value to the current url.
  if (elements.length === 0) return;
  elements.forEach((el) => {
    const val = el.getAttribute('fs-copyclip-text');
    if (val === 'url') {
      el.setAttribute('fs-copyclip-text', window.location.href);
    }
  });
};

//reset gsap on click of reset triggers
export const scrollReset = function () {
  //selector
  const RESET_EL = '[data-ix-reset]';
  //time option
  const RESET_TIME = 'data-ix-reset-time';
  const resetScrollTriggers = document.querySelectorAll(RESET_EL);
  resetScrollTriggers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      //reset scrolltrigger
      ScrollTrigger.refresh();
      //if item has reset timer reset scrolltriggers after timer as well.
      if (item.hasAttribute(RESET_TIME)) {
        let time = attr(1000, item.getAttribute(RESET_TIME));
        //get potential timer reset
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, time);
      }
    });
  });
};

export const updaterFooterYear = function () {
  // set the fs-hacks selector
  const YEAR_SELECTOR = '[data-footer-year]';
  // get the the span element
  const yearSpan = document.querySelector(YEAR_SELECTOR);
  if (!yearSpan) return;
  // get the current year
  const currentYear = new Date().getFullYear();
  // set the year span element's text to the current year
  yearSpan.innerText = currentYear.toString();
};

// ============================================================================
// 3.2 — getAttrConfig: Batch Attribute Reader
// ============================================================================
//
// HOW IT WORKS:
// Most interactions follow the same pattern — read 5-15 data attributes from
// an element and fall back to defaults. This utility does that in one call.
//
// It takes three arguments:
//   1. element  — the DOM element to read attributes from
//   2. prefix   — the interaction name (e.g. 'scrolling', 'marquee', 'load')
//   3. defaults — an object where keys are the attribute suffix and values
//                  are the default values (the types of the defaults drive
//                  the type coercion via the existing `attr` function)
//
// For each key in `defaults`, it constructs the full attribute name using:
//     data-ix-{prefix}-{key}
//
// Then it reads the attribute and passes it through `attr()` for type coercion.
//
// EXAMPLE — before:
//   let scrub = attr(0.5, wrap.getAttribute('data-ix-scrolling-scrub'));
//   let start = attr('top bottom', wrap.getAttribute('data-ix-scrolling-start'));
//   let end   = attr('bottom top', wrap.getAttribute('data-ix-scrolling-end'));
//   let ease  = attr('none', wrap.getAttribute('data-ix-scrolling-ease'));
//
// EXAMPLE — after:
//   const config = getAttrConfig(wrap, 'scrolling', {
//     scrub: 0.5,
//     start: 'top bottom',
//     end: 'bottom top',
//     ease: 'none',
//   });
//   // config.scrub, config.start, config.end, config.ease are all typed correctly
//
// The key names in `defaults` map directly to the attribute suffix. A key of
// 'start' looks for 'data-ix-{prefix}-start', 'toggle-actions' looks for
// 'data-ix-{prefix}-toggle-actions', etc.
//
// This keeps each interaction's configuration block to 3-5 lines instead of
// 10-20, and makes it obvious at a glance what the defaults are.
// ============================================================================
export const getAttrConfig = function (element, prefix, defaults) {
  const config = {};
  for (const [key, defaultVal] of Object.entries(defaults)) {
    const attrName = `data-ix-${prefix}-${key}`;
    config[key] = attr(defaultVal, element.getAttribute(attrName));
  }
  return config;
};

// ============================================================================
// 3.3 — buildFromToVars: Animated Property Builder
// ============================================================================
//
// HOW IT WORKS:
// Several interactions (scrolling, loop, and potentially new ones) let users
// control GSAP tween properties via data attributes with start/end pairs:
//     data-ix-scrolling-x-start="10%"
//     data-ix-scrolling-x-end="0%"
//     data-ix-scrolling-scale-start="0.5"
//     data-ix-scrolling-scale-end="1"
//
// This utility builds the `varsFrom` and `varsTo` objects that GSAP's
// `.fromTo()` method expects, by reading all supported property pairs
// from data attributes on a given element.
//
// It takes two arguments:
//   1. item   — the DOM element to read attributes from
//   2. prefix — the interaction name (e.g. 'scrolling', 'loop')
//
// PROPERTY MAP:
// The function maintains an internal map of [gsapProperty, attrSuffix, defaultValue]:
//   - gsapProperty: the GSAP tween property name (e.g. 'x', 'rotateZ', 'scaleX')
//   - attrSuffix:   the kebab-case suffix used in data attributes (e.g. 'x', 'rotate-z', 'scale-x')
//   - defaultValue: passed to `attrIfSet` for type coercion — if the attribute
//                    doesn't exist on the element, that property is excluded from
//                    the vars object entirely (attrIfSet returns undefined)
//
// For each property in the map, it reads:
//   data-ix-{prefix}-{attrSuffix}-start  → into varsFrom
//   data-ix-{prefix}-{attrSuffix}-end    → into varsTo
//
// Clip path is handled separately because it needs direction keyword conversion
// via `getClipDirection` (e.g. 'left' → 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)').
//
// EXAMPLE — before (scrolling.js had ~30 lines):
//   varsFrom.x = attrIfSet(item, X_START, '0%');
//   varsTo.x = attrIfSet(item, X_END, '0%');
//   varsFrom.y = attrIfSet(item, Y_START, '0%');
//   varsTo.y = attrIfSet(item, Y_END, '0%');
//   varsFrom.scale = attrIfSet(item, SCALE_START, 1);
//   varsTo.scale = attrIfSet(item, SCALE_END, 1);
//   // ... 20 more lines ...
//
// EXAMPLE — after:
//   const { varsFrom, varsTo } = buildFromToVars(item, 'scrolling');
//
// The returned objects only contain properties that were actually set via
// attributes (attrIfSet returns undefined for unset attributes, and GSAP
// ignores undefined values). This means you don't get unnecessary tweens
// for properties the designer didn't configure.
// ============================================================================
export const buildFromToVars = function (item, prefix) {
  // Each entry: [gsapProperty, attrSuffix, defaultValue]
  // The defaultValue type drives coercion — strings stay strings, numbers stay numbers
  const PROPERTY_MAP = [
    ['x', 'x', '0%'],
    ['y', 'y', '0%'],
    ['scale', 'scale', 1],
    ['scaleX', 'scale-x', 1],
    ['scaleY', 'scale-y', 1],
    ['width', 'width', '0%'],
    ['height', 'height', '0%'],
    ['rotateX', 'rotate-x', 0],
    ['rotateY', 'rotate-y', 0],
    ['rotateZ', 'rotate-z', 0],
    ['opacity', 'opacity', 0],
    ['borderRadius', 'radius', 'string'],
  ];

  const varsFrom = {};
  const varsTo = {};

  PROPERTY_MAP.forEach(([gsapProp, attrSuffix, defaultVal]) => {
    varsFrom[gsapProp] = attrIfSet(item, `data-ix-${prefix}-${attrSuffix}-start`, defaultVal);
    varsTo[gsapProp] = attrIfSet(item, `data-ix-${prefix}-${attrSuffix}-end`, defaultVal);
  });

  // Handle clip-path separately — needs keyword-to-polygon conversion
  const clipStart = attrIfSet(item, `data-ix-${prefix}-clip-start`, 'left');
  const clipEnd = attrIfSet(item, `data-ix-${prefix}-clip-end`, 'full');
  varsFrom.clipPath = getClipDirection(clipStart);
  varsTo.clipPath = getClipDirection(clipEnd);

  return { varsFrom, varsTo };
};

// ============================================================================
// 3.4 — Shared Webflow DOM Cleanup Utilities
// ============================================================================
//
// Webflow components and CMS collections insert extra wrapper elements that
// interfere with JavaScript-driven interactions (like sliders and tabs) that
// need to work with direct children.
//
// These two functions normalize the DOM before interactions initialize.
// Previously they were duplicated identically in both tabs.js and slider.js.
// ============================================================================

// flattenDisplayContents:
// Webflow component instances can wrap content in a div with `display: contents`.
// This div is visually invisible but breaks `.children` counts and sibling logic.
// This function unwraps those elements by moving their children up to the parent.
export const flattenDisplayContents = function (slot) {
  if (!slot) return;
  let child = slot.firstElementChild;
  while (child && child.classList.contains('u-display-contents')) {
    while (child.firstChild) {
      slot.insertBefore(child.firstChild, child);
    }
    slot.removeChild(child);
    child = slot.firstElementChild;
  }
};

// removeCMSList:
// Webflow CMS collections wrap items in `.w-dyn-list > .w-dyn-items > .w-dyn-item`.
// For sliders/tabs, we need the actual content elements as direct children of the
// slot (e.g. the swiper wrapper or tab panel list). This function extracts the
// visible CMS items and removes the wrapping structure.
export const removeCMSList = function (slot) {
  const dynList = Array.from(slot.children).find((child) => child.classList.contains('w-dyn-list'));
  if (!dynList) return;
  const nestedItems = dynList?.querySelector('.w-dyn-items')?.children;
  if (!nestedItems) return;
  const staticWrapper = [...slot.children];
  [...nestedItems].forEach((el) => {
    const c = [...el.children].find((c) => !c.classList.contains('w-condition-invisible'));
    c && slot.appendChild(c);
  });
  staticWrapper.forEach((el) => el.remove());
};
