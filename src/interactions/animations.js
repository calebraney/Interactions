// ============================================================================
// animations.js — Shared Animation Factory
// ============================================================================
//
// USAGE:
//   import { createAnimation, isAnimationType, ANIMATION_MAP } from './animations';
//   createAnimation(tl, element, 'slide-up-words', { position: 0 });
//   createAnimation(tl, element, 'slide-up', { position: 0 }, { move: '4rem', duration: 1 });
//
// ARCHITECTURE:
//   ANIMATION_DEFAULTS — central defaults for all animations. Override per-site
//                        by passing window.ixConfig values as configDefaults
//                        to createAnimation.
//   BASE_ANIMATIONS  — factory functions returning { from, to } GSAP vars.
//                      They receive opts so dynamic values (move) apply correctly.
//                      Specific animations (rotate-up-dramatic, scale-*) use
//                      fixed internal values and ignore move intentionally.
//   SPLIT_TYPES      — defines SplitText configuration for words / lines / chars.
//   ANIMATION_MAP    — maps type strings to handler functions. Exported so that
//                      isAnimationType stays in sync without a separate list.
//
// ADDING A NEW ANIMATION TYPE:
//   1. Add an entry to BASE_ANIMATIONS returning { from, to }.
//   2. Add a handler to ANIMATION_MAP for the plain type, and any split variants.
//   That's it — isAnimationType updates automatically.
//
// ============================================================================

import { getClipDirection, resolveRichTextTarget } from '../utilities';

// ============================================================================
// ANIMATION_DEFAULTS
// Central defaults for all animations. Any key can be overridden per-site by
// passing window.ixConfig values into createAnimation as configDefaults.
//
//   move          — translation distance for slide/rotate animations
//   stagger       — delay between elements in an element-array animation
//   staggerLines  — delay between lines in SplitText line animations
//   staggerWords  — delay between words in SplitText word animations
//   staggerChars  — delay between chars in SplitText char animations
// ============================================================================
const ANIMATION_DEFAULTS = {
  duration: 0.6,
  ease: 'power1.out',
  move: '2rem',
  stagger: 0.1,
  staggerLines: 0.15,
  staggerWords: 0.075,
  staggerChars: 0.03,
};

// ============================================================================
// BASE_ANIMATIONS
// Factory functions that return { from, to } GSAP vars for each animation family.
// They receive opts so dynamic values (move) propagate correctly.
//
// Animations with intentional fixed geometry (rotate-up-dramatic, scale-*)
// ignore move — their values are not a generic offset.
// ============================================================================
const BASE_ANIMATIONS = {
  // Simple fades
  fade: () => ({ from: { autoAlpha: 0 }, to: { autoAlpha: 1 } }),

  'slide-up': ({ move }) => ({ from: { autoAlpha: 0, y: move }, to: { autoAlpha: 1, y: '0rem' } }),
  'slide-down': ({ move }) => ({
    from: { autoAlpha: 0, y: `-${move}` },
    to: { autoAlpha: 1, y: '0rem' },
  }),
  'slide-right': ({ move }) => ({
    from: { autoAlpha: 0, x: `-${move}` },
    to: { autoAlpha: 1, x: '0rem' },
  }),
  'slide-left': ({ move }) => ({
    from: { autoAlpha: 0, x: move },
    to: { autoAlpha: 1, x: '0rem' },
  }),
  // Rotate — gentle 3D lift using the shared move offset
  'rotate-up': ({ move }) => ({
    from: { autoAlpha: 0, y: move, rotateX: 15 },
    to: { autoAlpha: 1, y: '0rem', rotateX: 0 },
  }),
  // Rotate dramatic — strong 3D flip with fixed geometry (not affected by move)
  'rotate-up-dramatic': () => ({
    from: { autoAlpha: 0, y: '50%', rotateX: 45 },
    to: { autoAlpha: 1, y: '0%', rotateX: 0 },
  }),
  // Scale entrances — fixed scale values (not affected by move)
  'scale-up': () => ({ from: { autoAlpha: 0, scale: 0.8 }, to: { autoAlpha: 1, scale: 1 } }),
  'scale-down': () => ({ from: { autoAlpha: 0, scale: 1.2 }, to: { autoAlpha: 1, scale: 1 } }),
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
    toVars.stagger = { each: opts.stagger, from: 'start' };
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
  const duration = opts.duration;
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

  // Map split type to its corresponding stagger value from opts
  const staggerByType = {
    lines: opts.staggerLines,
    words: opts.staggerWords,
    chars: opts.staggerChars,
  };

  SplitText.create(target, {
    type: splitConfig.type,
    // Class names make individual units targetable via CSS if needed
    ...(splitConfig.wordsClass && { wordsClass: splitConfig.wordsClass }),
    ...(splitConfig.linesClass && { linesClass: splitConfig.linesClass }),
    ...(splitConfig.charsClass && { charsClass: splitConfig.charsClass }),
    autoSplit: true, // automatically re-splits on container resize
    onSplit(self) {
      // Build animation vars from the base definition + stagger for each unit
      const fromVars = {
        ...baseAnim.from,
        stagger: staggerByType[splitConfig.staggerKey],
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
// BASE_ANIMATIONS are called with opts so dynamic defaults (move) apply.
// ============================================================================
export const ANIMATION_MAP = {
  // --- Element animations (no text splitting) ---
  fade: (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS.fade(opts)),
  'slide-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['slide-up'](opts)),
  'slide-down': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['slide-down'](opts)),
  'slide-right': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['slide-right'](opts)),
  'slide-left': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['slide-left'](opts)),
  'rotate-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['rotate-up'](opts)),
  'rotate-up-dramatic': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'](opts)),
  'scale-up': (tl, el, opts) => animateElement(tl, el, opts, BASE_ANIMATIONS['scale-up'](opts)),
  'scale-down': (tl, el, opts) =>
    animateElement(tl, el, opts, BASE_ANIMATIONS['scale-down'](opts)),
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
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade(opts), SPLIT_TYPES.words),
  'fade-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade(opts), SPLIT_TYPES.lines),
  'fade-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS.fade(opts), SPLIT_TYPES.chars),
  // slide-up splits
  'slide-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'](opts), SPLIT_TYPES.words),
  'slide-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'](opts), SPLIT_TYPES.lines),
  'slide-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-up'](opts), SPLIT_TYPES.chars),
  // slide-down splits
  'slide-down-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'](opts), SPLIT_TYPES.words),
  'slide-down-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'](opts), SPLIT_TYPES.lines),
  'slide-down-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-down'](opts), SPLIT_TYPES.chars),
  // slide-left splits
  'slide-left-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'](opts), SPLIT_TYPES.words),
  'slide-left-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'](opts), SPLIT_TYPES.lines),
  'slide-left-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['slide-left'](opts), SPLIT_TYPES.chars),
  // rotate-up splits
  'rotate-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'](opts), SPLIT_TYPES.words),
  'rotate-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'](opts), SPLIT_TYPES.lines),
  'rotate-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up'](opts), SPLIT_TYPES.chars),
  // rotate-up-dramatic splits (strong 3D flip — default for load headings)
  'rotate-up-dramatic-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'](opts), SPLIT_TYPES.words),
  'rotate-up-dramatic-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'](opts), SPLIT_TYPES.lines),
  'rotate-up-dramatic-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['rotate-up-dramatic'](opts), SPLIT_TYPES.chars),
  // scale-up splits
  'scale-up-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'](opts), SPLIT_TYPES.words),
  'scale-up-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'](opts), SPLIT_TYPES.lines),
  'scale-up-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-up'](opts), SPLIT_TYPES.chars),
  // scale-down splits
  'scale-down-words': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'](opts), SPLIT_TYPES.words),
  'scale-down-lines': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'](opts), SPLIT_TYPES.lines),
  'scale-down-chars': (tl, el, opts) =>
    animateSplit(tl, el, opts, BASE_ANIMATIONS['scale-down'](opts), SPLIT_TYPES.chars),
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
//   tl             — the GSAP timeline to add the tween to
//   element        — a single DOM element or array of DOM elements
//   animationType  — a key from ANIMATION_MAP (e.g. 'slide-up-words')
//   options        — merged overrides: caller pre-merges interaction defaults + ixConfig
//                    before passing in. Priority (lowest → highest): ANIMATION_DEFAULTS → options
//
// Priority (lowest → highest): ANIMATION_DEFAULTS → options
// ============================================================================
export const createAnimation = function (tl, element, animationType, options = {}) {
  // Look up the handler — log a warning if the type is not registered
  const handler = ANIMATION_MAP[animationType];
  if (!handler) {
    console.warn(`createAnimation: unknown animation type "${animationType}"`);
    return;
  }

  const opts = {
    duration: options.duration ?? ANIMATION_DEFAULTS.duration,
    ease: options.ease ?? ANIMATION_DEFAULTS.ease,
    move: options.move ?? ANIMATION_DEFAULTS.move,
    stagger: options.stagger ?? ANIMATION_DEFAULTS.stagger,
    staggerLines: options.staggerLines ?? ANIMATION_DEFAULTS.staggerLines,
    staggerWords: options.staggerWords ?? ANIMATION_DEFAULTS.staggerWords,
    staggerChars: options.staggerChars ?? ANIMATION_DEFAULTS.staggerChars,
    position: options.position, // undefined means GSAP appends sequentially
  };

  return handler(tl, element, opts);
};
