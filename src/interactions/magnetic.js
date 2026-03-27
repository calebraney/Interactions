import { attr, checkRunProp, getIxConfig } from '../utilities';

export const magnetic = function () {
  //animation ID
  const ANIMATION_ID = 'magnetic';
  //elements
  const WRAP = '[data-ix-magnetic="wrap"]'; // the wrapper element
  const TRIGGER = '[data-ix-magnetic="trigger"]'; // optional: source of pointer events (defaults to wrap)
  const TARGET = '[data-ix-magnetic="target"]'; // optional: the element that moves (defaults to wrap)
  const INNER = '[data-ix-magnetic="inner"]'; // optional inner element that moves further (e.g. button text)
  //options
  const STRENGTH = 'data-ix-magnetic-strength'; // 0-1, how much the element follows the cursor (default 0.3)
  const INNER_STRENGTH = 'data-ix-magnetic-inner-strength'; // 0-1, inner element follows more than outer (default 0.5)
  const DURATION = 'data-ix-magnetic-duration'; // how fast the element catches up (default 0.4)
  const EASE = 'data-ix-magnetic-ease'; // easing on the follow movement (default 'power2.out')
  const RETURN_DURATION = 'data-ix-magnetic-return-duration'; // how fast the element returns to center (default 0.6)
  const RETURN_EASE = 'data-ix-magnetic-return-ease'; // easing on the return (default 'elastic.out(1.2, 0.5)')
  const ACTIVE_CLASS = 'data-ix-magnetic-active-class'; // class added while the cursor is inside the wrap
  const HOVER_SCALE = 'data-ix-magnetic-hover-scale'; // optional scale on hover (default 1, set to e.g. 1.05)

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  // Select all wraps
  const wraps = [...document.querySelectorAll(WRAP)];
  if (wraps.length === 0) return;

  wraps.forEach((wrap) => {
    if (!wrap) return;

    //check if the run prop is set to true
    let runProp = checkRunProp(wrap, ANIMATION_ID);
    if (runProp === false) return;

    // Skip on touch devices — magnetic effects don't make sense without a cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints) return;

    // Read options
    let strength = attr(0.3, wrap.getAttribute(STRENGTH));
    let innerStrength = attr(0.5, wrap.getAttribute(INNER_STRENGTH));
    let duration = attr(0.6, wrap.getAttribute(DURATION));
    let ease = attr('power1.out', wrap.getAttribute(EASE));
    let returnDuration = attr(0.6, wrap.getAttribute(RETURN_DURATION));
    let returnEase = attr('elastic.out(1.2, 0.5)', wrap.getAttribute(RETURN_EASE));
    let activeClass = attr('is-active', wrap.getAttribute(ACTIVE_CLASS));
    let hoverScale = attr(1, wrap.getAttribute(HOVER_SCALE));

    // Get optional elements — fall back to wrap if not present
    const trigger = wrap.querySelector(TRIGGER) || wrap; // source of pointer events
    const target = wrap.querySelector(TARGET) || wrap; // element that moves
    const inner = wrap.querySelector(INNER); // optional inner element

    // Track mouse position within the trigger and apply magnetic pull
    trigger.addEventListener('mousemove', function (e) {
      const rect = trigger.getBoundingClientRect();
      // Calculate offset from center of the trigger, in pixels
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      // Move the target by strength amount
      gsap.to(target, {
        x: offsetX * strength,
        y: offsetY * strength,
        scale: hoverScale,
        duration: duration,
        ease: ease,
        overwrite: 'auto',
      });

      // Move the inner element further for a layered parallax-like effect
      if (inner) {
        gsap.to(inner, {
          x: offsetX * innerStrength,
          y: offsetY * innerStrength,
          duration: duration,
          ease: ease,
          overwrite: 'auto',
        });
      }
    });

    trigger.addEventListener('mouseenter', function () {
      wrap.classList.add(activeClass);
    });

    trigger.addEventListener('mouseleave', function () {
      wrap.classList.remove(activeClass);
      // Snap back to center
      gsap.to(target, {
        x: 0,
        y: 0,
        scale: 1,
        duration: returnDuration,
        ease: returnEase,
        overwrite: 'auto',
      });

      if (inner) {
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: returnDuration,
          ease: returnEase,
          overwrite: 'auto',
        });
      }
    });
  });
};
