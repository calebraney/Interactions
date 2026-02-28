import { attr, checkRunProp } from '../utilities';

export const magnetic = function () {
  //animation ID
  const ANIMATION_ID = 'magnetic';
  //elements
  const ITEM = '[data-ix-magnetic="item"]'; // the element that moves toward the cursor
  const INNER = '[data-ix-magnetic="inner"]'; // optional inner element that moves further (e.g. button text)
  //options
  const STRENGTH = 'data-ix-magnetic-strength'; // 0-1, how much the element follows the cursor (default 0.3)
  const INNER_STRENGTH = 'data-ix-magnetic-inner-strength'; // 0-1, inner element follows more than outer (default 0.5)
  const DURATION = 'data-ix-magnetic-duration'; // how fast the element catches up (default 0.4)
  const EASE = 'data-ix-magnetic-ease'; // easing on the follow movement (default 'power2.out')
  const RETURN_DURATION = 'data-ix-magnetic-return-duration'; // how fast the element returns to center (default 0.6)
  const RETURN_EASE = 'data-ix-magnetic-return-ease'; // easing on the return (default 'elastic.out(1.2, 0.5)')
  const ACTIVE_CLASS = 'data-ix-magnetic-active-class'; // class added while the cursor is inside the item
  const HOVER_SCALE = 'data-ix-magnetic-hover-scale'; // optional scale on hover (default 1, set to e.g. 1.05)

  // Select all items
  const items = [...document.querySelectorAll(ITEM)];
  if (items.length === 0) return;

  items.forEach((item) => {
    if (!item) return;

    //check if the run prop is set to true
    let runProp = checkRunProp(item, ANIMATION_ID);
    if (runProp === false) return;

    // Skip on touch devices — magnetic effects don't make sense without a cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints) return;

    // Read options
    let strength = attr(0.3, item.getAttribute(STRENGTH));
    let innerStrength = attr(0.5, item.getAttribute(INNER_STRENGTH));
    let duration = attr(0.4, item.getAttribute(DURATION));
    let ease = attr('power2.out', item.getAttribute(EASE));
    let returnDuration = attr(0.6, item.getAttribute(RETURN_DURATION));
    let returnEase = attr('elastic.out(1.2, 0.5)', item.getAttribute(RETURN_EASE));
    let activeClass = attr('is-active', item.getAttribute(ACTIVE_CLASS));
    let hoverScale = attr(1, item.getAttribute(HOVER_SCALE));

    // Get optional inner element (text or icon inside the button)
    const inner = item.querySelector(INNER);

    // Track mouse position within the element and apply magnetic pull
    item.addEventListener('mousemove', function (e) {
      const rect = item.getBoundingClientRect();
      // Calculate offset from center of the element, in pixels
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      // Move the outer item by strength amount
      gsap.to(item, {
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

    item.addEventListener('mouseenter', function () {
      item.classList.add(activeClass);
    });

    item.addEventListener('mouseleave', function () {
      item.classList.remove(activeClass);
      // Snap back to center
      gsap.to(item, {
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
