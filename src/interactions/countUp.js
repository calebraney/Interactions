import { CountUp } from 'countup.js';

export const countUp = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'countup';
  //options
  const SCROLLING_START = 'data-ix-scrolling-start';
  const SCROLLING_DURATION = 'data-ix-scrolling-duration';
  //selectors
  const COUNT_WRAP = '[data-ix-countup="item"]';
  //elements
  const items = document.querySelectorAll(COUNT_WRAP);
  items.forEach((item) => {
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //turn the text content into a number and check to make sure it is valid
    const number = +item.textContent;
    if (!number || Number.isNaN(number)) return;
    //check for decimal points
    decimalPoints = countDecimalPoints(number);
    //proccess options
    let duration = attr(2.5, item.getAttribute(SCROLLING_DURATION));
    let start = attr('top bottom', item.getAttribute(SCROLLING_START));

    //count up function
    const countUp = new CountUp(item, number, {
      useGrouping: false,
      decimalPlaces: decimalPoints,
      duration: duration,
    });
    //trigger countup on enter
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: start,
        end: 'top 10%',
        scrub: true,
        onEnter: () => {
          countUp.start();
        },
      },
    });
  });
};

function countDecimalPoints(number) {
  // Convert the number to a string
  const numberString = number.toString();
  // Split the string by the decimal point
  const parts = numberString.split('.');
  // If there are no decimal points, return 0
  if (parts.length === 1) {
    return 0;
  }
  // Return the length of the fractional part (number of decimal points)
  return parts[1].length;
}
