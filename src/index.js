import { attr, copyURL, scrollReset, updaterFooterYear } from './utilities';
import { accordion } from './interactions/accordion';
import { banner } from './interactions/banner';
import { clickActive } from './interactions/click-active';
import { countUp } from './interactions/count-up';
import { cursor } from './interactions/cursor';
import { hoverActive } from './interactions/hover-active';
import { initLenis } from './interactions/lenis';
import { imageSwitch } from './interactions/image-switch';
import { lightbox } from './interactions/lightbox';
import { load } from './interactions/load';
import { loop } from './interactions/loop';
import { marquee } from './interactions/marquee';
import { mouseOver } from './interactions/mouse-over';
import { modal } from './interactions/modal';
import { pageTransition } from './interactions/page-transition';
import { parallax } from './interactions/parallax';
import { pathHover } from './interactions/path-hover';
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';
import { tabs } from './interactions/tabs';
import { sliderComponent } from './interactions/slider';
import { textScrub } from './interactions/text-scrub';
import { textLinks } from './interactions/text-links';
import { videoPlyr } from './interactions/video-plyr';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  //////////////////////////////
  //Global Variables
  let lenis;

  //////////////////////////////
  //Slider instances
  // const caseGallerySlider = function () {
  //   const COMPONENT = '.case-gallery-slider_component';
  //   const components = [...document.querySelectorAll(COMPONENT)];
  //   const options = {
  //     slidesPerView: 'auto',
  //     loop: true,
  //   };
  //   //apply a module with defaults settings (canc override them using the options object above)
  //   const modules = {
  //     navigation: true,
  //     pagination: false,
  //     scrollbar: false,
  //     autoplay: false,
  //   };
  //   const sliders = createSlider(components, options, modules);
  // };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    //if gsap isn't found add .gsap-not-found class to document
    if (typeof window.gsap === 'undefined')
      document.documentElement.classList.add('gsap-not-found');
    // register gsap plugins if available
    if (gsap.ScrollTrigger !== undefined) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== undefined) {
      gsap.registerPlugin(Flip);
    }

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
        load(gsapContext);
        accordion(gsapContext);
        banner(gsapContext);
        clickActive(gsapContext);
        hoverActive(gsapContext);
        imageSwitch(gsapContext);
        modal(gsapContext, lenis);
        pageTransition();
        marquee(gsapContext);
        textLinks(gsapContext);
        sliderComponent();
        tabs();

        if (!reduceMotion) {
          countUp(gsapContext);
          loop(gsapContext);
          textScrub(gsapContext);
          mouseOver(gsapContext);
          parallax(gsapContext);
          scrollIn(gsapContext);
          scrolling(gsapContext);
          pathHover(gsapContext);
        }
        //globaally run animations on specific breakpoints
        if (isDesktop || isTablet) {
          cursor(gsapContext);
        }
        //setup video players
        const [players, components] = [videoPlyr()];
        //pass the players into the lightbox code
        lightbox(gsapContext, players, components);
      }
    );
  };
  gsapInit();

  //utilities
  copyURL();
  scrollReset();
  updaterFooterYear();
});
