export const mouseHover = function () {
  //constants
  const HOVER_WRAP = '[data-ix-mousehover="wrap"]';
  // get all links without a no-hover attribute and any other elements with a hover attribute into an array
  const hoverElements = gsap.utils.toArray(HOVER_WRAP);
  const activeClass = 'is-active';
  hoverElements.forEach((item) => {
    if (!item) return;
    item.addEventListener('mouseover', function (e) {
      item.classList.add(activeClass);
    });
    item.addEventListener('mouseleave', function (e) {
      item.classList.remove(activeClass);
    });
  });
};
