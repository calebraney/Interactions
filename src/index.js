import { attr } from './utilities';
import { accordion } from './interactions/accordion';
import { cursor } from './interactions/cursor';
import { hoverActive } from './interactions/hoverActive';
import { mouseOver } from './interactions/mouseOver';
import { parallax } from './interactions/parallax';
import { scrollIn } from './interactions/scrollIn';
import { scrolling } from './interactions/scrolling';
import { textLinks } from './interactions/textLinks';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //////////////////////////////
  //Global Variables

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        // let individual instances decide if they are run
        mouseOver(gsapContext);
        scrolling(gsapContext);
        //globaally run animations on specific breakpoints
        if (isDesktop || isTablet) {
          cursor();
        }
      }
    );
  };
  gsapInit();
});
