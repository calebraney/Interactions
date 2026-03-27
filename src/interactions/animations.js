// ============================================================================
// animations.js — Shared Animation Factory
// ============================================================================
//
// USAGE:
//   import { createAnimation, isAnimationType, ANIMATION_MAP } from './animations';
//   createAnimation(tl, element, 'slide-up-words', { position: 0 });
//
// ARCHITECTURE:
//   BASE_ANIMATIONS  — defines from/to vars for each animation type in one place.
//                      Split variants (rotate-up-words, rotate-up-lines, etc.) all
//                      reference the same base entry, so updating a base type
//                      automatically propagates to all its split variants.
//   SPLIT_TYPES      — defines SplitText configuration for words / lines / chars.
//   ANIMATION_MAP    — maps type strings to handler functions. Exported so that
//                      isAnimationType stays in sync without a separate list.
//
// ADDING A NEW ANIMATION TYPE:
//   1. Add an entry to BASE_ANIMATIONS with { from, to } GSAP vars.
//   2. Add a handler to ANIMATION_MAP for the plain type, and any split variants
//      you want (e.g. 'my-anim-words', 'my-anim-lines').
//   That's it — isAnimationType updates automatically.
//
// SPLITTEXT NOTE:
//   Split-text handlers do NOT return a tween directly. The tween is created
//   inside the onSplit callback (which fires on creation AND on resize).
//   The timeline (tl) and position (opts.position) are captured via closure.
//
// ============================================================================

import { getClipDirection, resolveRichTextTarget } from '../utilities';

const STAGGER = {
  lines: 0.15, // fewest units per element → wider gap reads well
  words: 0.075,
  chars: 0.03, // most units → tight gap prevents the animation dragging
  elements: 0.1, // generic child arrays (stagger type, container children)
};
const DEFAULTS = {
  duration: 0.6,
  ease: 'power1.out',
};

// ============================================================================
// BASE_ANIMATIONS
// Defines the from/to GSAP vars for each animation family.
// All split-text variants (-words, -lines, -chars) reference entries here,
// so you only need to edit one place to update every variant of a type.
// ============================================================================
const BASE_ANIMATIONS = {
  // Simple fades
  fade: { from: { autoAlpha: 0 }, to: { autoAlpha: 1 } },

  'slide-up': {
    from: { autoAlpha: 0, y: '2rem' },
    to: { autoAlpha: 1, y: '0rem' },
  },
  'slide-down': {
    from: { autoAlpha: 0, y: '-2rem' },
    to: { autoAlpha: 1, y: '0rem' },
  },
  'slide-right': {
    from: { autoAlpha: 0, x: '-2rem' },
    to: { autoAlpha: 1, x: '0rem' },
  },
  'slide-left': {
    from: { autoAlpha: 0, x: '2rem' },
    to: { autoAlpha: 1, x: '0rem' },
  },
  // Rotate — gentle 3D lift on a single element or split units
  'rotate-up': {
    from: { autoAlpha: 0, y: '2rem', rotateX: 15 },
    to: { autoAlpha: 1, y: '0rem', rotateX: 0 },
  },
  // Rotate dramatic — strong 3D flip used for load headings (matches original loadHeading behaviour)
  'rotate-up-dramatic': {
    from: { autoAlpha: 0, y: '50%', rotateX: 45 },
    to: { autoAlpha: 1, y: '0%', rotateX: 0 },
  },
  // Scale entrances
  'scale-up': { from: { autoAlpha: 0, scale: 0.8 }, to: { autoAlpha: 1, scale: 1 } },
  'scale-down': { from: { autoAlpha: 0, scale: 1.2 }, to: { autoAlpha: 1, scale: 1 } },
};

// ============================================================================
// SPLIT_TYPES
// Defines SplitText configuration for each text-split variant.
// ============================================================================
const SPLIT_TYPES = {
  lines: { type: 'lines, words', linesClass: 'line', itemsKey: 'lines', staggerKey: 'lines' },
  words: { type: 'words', wordsClass: 'word', itemsKey: 'words', staggerKey: 'words' },
  chars: { type: 'words, chars', charsClass: 'char', itemsKey: 'chars', staggerKey: 'chars' },
};

// ============================================================================
// Internal handler helpers
// ============================================================================

// animateElement — handles plain element animations (no text splitting).
// When given an array, a stagger is applied automatically.
const animateElement = function (tl, element, opts, baseAnim) {
  // Clone to/from vars so we don't mutate the shared BASE_ANIMATIONS objects
  const fromVars = { ...baseAnim.from };
  const toVars = { ...baseAnim.to };

  // Apply stagger when animating multiple elements at once
  if (Array.isArray(element)) {
    toVars.stagger = { each: opts.stagger ?? STAGGER.elements, from: 'start' };
  }

  return tl.fromTo(element, fromVars, toVars, opts.position);
};

// animateClip — handles clip-path reveal animations.
// Uses getClipDirection from utilities to convert direction keywords to polygons.
//
// We use tl.set() to make the element immediately visible at animation start.
// This is more reliable than autoAlpha in fromVars: tl.set() creates a persistent
// inline style that survives GSAP's internal cleanup at animation end. This is
// needed because the FOUC prevention CSS uses visibility:hidden, and the clip-path
// itself controls the visual reveal (the element should be fully opaque throughout).
const animateClip = function (tl, element, opts, directionKey) {
  const clipStart = getClipDirection(directionKey);
  const clipEnd = getClipDirection('full');
  // Make element immediately visible — opacity:0 CSS is overridden by inline opacity:1
  tl.set(element, { autoAlpha: 1 }, opts.position);
  return tl.fromTo(element, { clipPath: clipStart }, { clipPath: clipEnd }, opts.position);
};

// animateImageZoom — zooms the image OUT while scaling the parent wrapper IN.
// The element passed should be the image itself; the parent is accessed internally.
// Same tl.set() pattern as animateClip for persistent visibility override.
const animateImageZoom = function (tl, element, opts) {
  const parent = element.parentElement;
  const duration = opts.duration ?? 1;
  const position = opts.position ?? '<';
  // Make image immediately visible, then scale from slightly enlarged
  tl.set(element, { autoAlpha: 1 }, position);
  tl.fromTo(element, { scale: 1.2 }, { scale: 1, duration }, position);
  // Parent scales up from slightly reduced — '<' makes them run simultaneously
  tl.fromTo(parent, { scale: 0.9 }, { scale: 1, duration }, '<');
};

// animateSplit — handles SplitText animations (words / lines / chars).
// The element should be a single DOM node. For rich text wrappers (.w-richtext),
// resolveRichTextTarget is called to get the inner text element.
// The tween is created inside onSplit so it re-runs correctly on resize.
// Both tl and opts are captured via closure so they remain available on re-split.
//
// VISIBILITY NOTE: We set autoAlpha: 1 on the PARENT element (not the split units)
// at animation start for two reasons:
//   1. Overrides CSS visibility:hidden from the load FOUC prevention snippet
//   2. After onComplete fires self.revert() (removing the split spans), the parent
//      element needs its own inline visibility:visible so the restored text stays
//      visible — GSAP's inline styles on the now-removed spans disappear with them.
const animateSplit = function (tl, element, opts, baseAnim, splitConfig) {
  // Set the parent element itself visible at animation start so that:
  // - The load FOUC CSS visibility:hidden is overridden
  // - Text remains visible after SplitText reverts (split spans are removed)
  tl.set(element, { autoAlpha: 1 }, opts.position);
  // Resolve rich text wrapper to the actual text element for SplitText
  const target = resolveRichTextTarget(element);

  SplitText.create(target, {
    type: splitConfig.type,
    // Class names make individual units targetable via CSS if needed
    ...(splitConfig.wordsClass && { wordsClass: splitConfig.wordsClass }),
    ...(splitConfig.linesClass && { linesClass: splitConfig.linesClass }),
    ...(splitConfig.charsClass && { charsClass: splitConfig.charsClass }),
    autoSplit: true, // automatically re-splits on container resize
    onSplit(self) {
      // Build animation vars from the base definition — from vars + stagger for each unit
      const fromVars = {
        ...baseAnim.from,
        stagger: opts.stagger ?? STAGGER[splitConfig.staggerKey],
      };
      const tween = tl.from(self[splitConfig.itemsKey], fromVars, opts.position);
      // Revert the SplitText DOM changes once the animation completes to keep
      // the DOM clean and avoid any layout side-effects from split nodes
      tween.eventCallback('onComplete', () => self.revert());
      return tween;
    },
  });
};

// ============================================================================
// ANIMATION_MAP — exported
// Maps animation type strings to handler functions.

// Split variants reference BASE_ANIMATIONS entries, so editing e.g. BASE_ANIMATIONS['rotate-up'] updates rotate-up-words, -lines, and -chars.
// ============================================================================
export const ANIMATION_MAP = {
  // --- Element animations (no text splitting) ---
  fade: (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS.fade),
  'slide-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['slide-up']),
  'slide-down': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['slide-down']),
  'slide-right': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['slide-right']),
  'slide-left': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['slide-left']),
  'rotate-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['rotate-up']),
  'rotate-up-dramatic': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic']),
  'scale-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['scale-up']),
  'scale-down': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['scale-down']),
  // --- Clip-path reveal animations ---
  'clip-left': (tl, el, opts) => animateClip(tl, el, opts, 'left'),
  'clip-right': (tl, el, opts) => animateClip(tl, el, opts, 'right'),
  'clip-top': (tl, el, opts) => animateClip(tl, el, opts, 'top'),
  'clip-bottom': (tl, el, opts) => animateClip(tl, el, opts, 'bottom'),
  // --- Image zoom (dual-element: image + parent) ---
  'image-zoom': (tl, el, opts) => animateImageZoom(tl, el, opts),
  // --- Split-text variants ---
  // fade splits
  'fade-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade, SPLIT_TYPES.words),
  'fade-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade, SPLIT_TYPES.lines),
  'fade-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade, SPLIT_TYPES.chars),
  // slide-up splits
  'slide-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'], SPLIT_TYPES.words),
  'slide-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'], SPLIT_TYPES.lines),
  'slide-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'], SPLIT_TYPES.chars),
  // slide-down splits
  'slide-down-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'], SPLIT_TYPES.words),
  'slide-down-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'], SPLIT_TYPES.lines),
  'slide-down-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'], SPLIT_TYPES.chars),
  // slide-left splits
  'slide-left-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'], SPLIT_TYPES.words),
  'slide-left-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'], SPLIT_TYPES.lines),
  'slide-left-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'], SPLIT_TYPES.chars),
  // rotate-up splits
  'rotate-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'], SPLIT_TYPES.words),
  'rotate-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'], SPLIT_TYPES.lines),
  'rotate-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'], SPLIT_TYPES.chars),
  // rotate-up-dramatic splits (strong 3D flip — default for load headings)
  'rotate-up-dramatic-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'], SPLIT_TYPES.words),
  'rotate-up-dramatic-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'], SPLIT_TYPES.lines),
  'rotate-up-dramatic-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'], SPLIT_TYPES.chars),
  // scale-up splits
  'scale-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'], SPLIT_TYPES.words),
  'scale-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'], SPLIT_TYPES.lines),
  'scale-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'], SPLIT_TYPES.chars),
  // scale-down splits
  'scale-down-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'], SPLIT_TYPES.words),
  'scale-down-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'], SPLIT_TYPES.lines),
  'scale-down-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'], SPLIT_TYPES.chars),
  // // clip-left splits
  // 'clip-left-words': (tl, el, opts) =>
  //   animateSplit(tl, el, opts, animateClip(tl, el, opts, 'left'), SPLIT_TYPES.words),
  // 'clip-left-lines': (tl, el, opts) =>
  //   animateSplit(tl, el, opts, animateClip(tl, el, opts, 'left'), SPLIT_TYPES.lines),
  // 'clip-left-chars': (tl, el, opts) =>
  //   animateSplit(tl, el, opts, animateClip(tl, el, opts, 'left'), SPLIT_TYPES.chars),
};

// ============================================================================
// isAnimationType — exported
// Returns true if the given string is a key in ANIMATION_MAP.
// Imported by scroll-in.js and load.js to distinguish direct animation
// type names (e.g. 'clip-bottom') from element-type keywords (e.g. 'heading').
// Derives from ANIMATION_MAP directly — no separate list to keep in sync.
// ============================================================================
export const isAnimationType = function (value) {
  return value in ANIMATION_MAP;
};

// ============================================================================
// createAnimation — exported
// The main entry point for all animation creation.
//
// Parameters:
//   tl            — the GSAP timeline to add the tween to
//   element       — a single DOM element or array of DOM elements
//   animationType — a key from ANIMATION_MAP (e.g. 'slide-up-words')
//   options       — optional overrides: { stagger, duration, ease, position }
//
// The resolved options are merged from DEFAULTS → options, so callers only
// need to specify what they want to override.
// ============================================================================
export const createAnimation = function (tl, element, animationType, options = {}) {
  // Look up the handler — log a warning if the type is not registered
  const handler = ANIMATION_MAP[animationType];
  if (!handler) {
    console.warn(`createAnimation: unknown animation type "${animationType}"`);
    return;
  }

  // Merge defaults with caller options. Caller wins on any overlapping keys.
  const opts = {
    duration: options.duration ?? DEFAULTS.duration,
    ease: options.ease ?? DEFAULTS.ease,
    stagger: options.stagger, // undefined means each handler uses its own STAGGER default
    position: options.position, // undefined means GSAP appends sequentially
  };

  return handler(tl, element, opts);
};
