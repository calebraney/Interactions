import { attr, checkRunProp, getIxConfig } from '../utilities';

export const playSound = function () {
  // ─── IDs & Selectors ────────────────────────────────────────────────────────
  const ANIMATION_ID = 'playsound';

  const WRAP = '[data-ix-playsound="wrap"]';

  // Option attribute names
  const OPTION_SRC = 'data-ix-playsound-src'; // required — URL of the sound file
  const OPTION_TRIGGER_ON = 'data-ix-playsound-trigger-on'; // 'click' (default) | 'hover' | 'focus'

  // ─── Global Enable Gate ─────────────────────────────────────────────────────
  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  // ─── Per-Instance Setup ──────────────────────────────────────────────────────
  const wraps = [...document.querySelectorAll(WRAP)];
  if (wraps.length === 0) return;

  wraps.forEach((wrap) => {
    // Guard: allow per-instance opt-out via data-ix-playsound-run="false"
    const runProp = checkRunProp(wrap, ANIMATION_ID);
    if (runProp === false) return;

    const src = attr('', wrap.getAttribute(OPTION_SRC));
    const triggerOn = attr('click', wrap.getAttribute(OPTION_TRIGGER_ON));

    if (!src) return;

    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    audio.src = src;

    // Map the event option to the appropriate DOM event name
    const eventMap = { click: 'click', hover: 'mouseenter', focus: 'focusin' };
    const domEvent = eventMap[triggerOn] || 'click';

    // ─── Event Listener
    // On each trigger: restart from the beginning so rapid retriggering
    // always replays from the start rather than layering or silently ignoring.
    wrap.addEventListener(domEvent, () => {
      audio.currentTime = 0;
      // Silently swallow play() rejections (browser autoplay policy).
      // In practice this interaction is always user-initiated so it won't block.
      audio.play().catch(() => {});
    });
  });
};
