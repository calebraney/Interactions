import { attr } from './utilities';
import { createSlider } from './interactions/slider';
import { accordion } from './interactions/accordion';
import { cursor } from './interactions/cursor';
import { countUp } from './interactions/countUp';
import { hoverActive } from './interactions/hoverActive';
import { mouseOver } from './interactions/mouseOver';
import { pageTransition } from './interactions/pageTransition';
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
  //Slider instances
  const caseGallerySlider = function () {
    const COMPONENT = '.case-gallery-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      slidesPerView: 'auto',
      loop: true,
    };
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

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
        accordion(gsapContext);
        countUp(gsapContext);
        hoverActive(gsapContext);
        mouseOver(gsapContext);
        pageTransition();
        parallax(gsapContext);
        scrollIn(gsapContext);
        scrolling(gsapContext);
        textLinks(gsapContext);

        //globaally run animations on specific breakpoints
        if (isDesktop || isTablet) {
          cursor();
        }
      }
    );
  };
  gsapInit();
});
