import { attr } from './utilities';
import { accordion } from './interactions/accordion';
import { clickActive } from './interactions/click-active';
import { createSlider } from './interactions/slider';
import { countUp } from './interactions/count-up';
import { cursor } from './interactions/cursor';
import { hoverActive } from './interactions/hover-active';
import { initLenis } from './interactions/lenis';
import { lightbox } from './interactions/lightbox';
import { load } from './interactions/load';
import { logoTicker } from './interactions/logo-ticker';
import { mouseOver } from './interactions/mouse-over';
import { pageTransition } from './interactions/page-transition';
import { parallax } from './interactions/parallax';
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';
import { textScrub } from './interactions/text-scrub';
import { textLinks } from './interactions/text-links';
import { videoPlyr } from './interactions/video-plyr';

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
  let lenis;

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
        lenis = initLenis();
        accordion(gsapContext);
        countUp(gsapContext);
        cursor(gsapContext);
        clickActive(gsapContext);
        hoverActive(gsapContext);
        mouseOver(gsapContext);
        pageTransition();
        parallax(gsapContext);
        scrollIn(gsapContext);
        scrolling(gsapContext);
        textScrub(gsapContext);
        load(gsapContext);
        logoTicker(gsapContext);
        textLinks(gsapContext);
        const [players, components] = videoPlyr();
        lightbox(gsapContext, players, components);

        //globaally run animations on specific breakpoints
        if (isDesktop || isTablet) {
          cursor();
        }
      }
    );
  };
  gsapInit();
});
