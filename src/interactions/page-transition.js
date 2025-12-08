import { attr, startScroll, stopScroll, checkContainer } from '../utilities';

/*
Include this css in the head code
<style>
.wrap {
	display: flex;
}
</style>
*/

export const pageTransition = function (lenis) {
  // Animation ID
  const ANIMATION_ID = 'pagetransition';
  // Elements
  const WRAP = '[data-ix-pagetransition="wrap"]';
  const COLUMN = '[data-ix-pagetransition="column"]';
  //Options
  // if '[data-ix-pagetransition="false"]' then prevent the transition
  const EXCLUDE = 'data-ix-pagetransition';
  //Get Elements
  const transitionWrap = document.querySelector(WRAP);
  const transitionColumns = document.querySelectorAll(COLUMN);
  if (!transitionWrap || transitionColumns.length === 0) return;

  // Page load animation
  const tlLoad = gsap.timeline();
  tlLoad.to(COLUMN, { yPercent: -100, stagger: 0.2 });
  tlLoad.set(WRAP, { display: 'none' });

  const checkLink = function (link) {
    if (!link || link.tagName !== 'A') {
      // If the argument is not a link element, return false
      return false;
    }
    // get the attributes from the link
    const hostname = link.hostname;
    const target = link.target;
    const href = link.getAttribute('href');
    //check the link for a prevent transition attribute.
    const playTransition = attr(true, link.getAttribute(EXCLUDE));
    // link doesn't have prevent transition attribute, link is for the current site, link isn't an anchor, link doesn't open in new tab
    if (
      !hostname ||
      hostname !== window.location.hostname ||
      (target && target === '_blank') ||
      !href ||
      href.includes('#') ||
      !playTransition
    ) {
      return false;
    } else {
      return true;
    }
  };

  // Link click event listener
  document.querySelectorAll('a').forEach((link) => {
    //get the link url
    const linkURL = link.getAttribute('href');
    // check if the link should play the transition, requirements:
    const playTransition = checkLink(link);
    //conditionally play the transition
    if (playTransition) {
      // add event listener for link click
      link.addEventListener('click', function (e) {
        e.preventDefault();
        //turn on if using lenis to prevent scrolling during the transition.
        //lenis.stop()
        //gsap timeline
        const tlClick = gsap.timeline({
          onStart: () => {
            stopScroll(lenis);
          },
          onComplete: () =>
            setTimeout(() => {
              window.location.href = linkURL;
            }, 100),
        });
        tlClick.set(WRAP, { display: 'flex' });
        tlClick.fromTo(COLUMN, { yPercent: 100 }, { yPercent: 0, stagger: 0.2 });
      });
    }
  });

  // Prevents back button bug on safari
  window.onpageshow = function (event) {
    if (event.persisted) window.location.reload();
  };
};
