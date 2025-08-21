import { attr, startScroll, stopScroll } from './utilities';
import { accordion } from './interactions/accordion';
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
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';
import { tabsAnimation } from './interactions/tabs';
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
        clickActive(gsapContext);
        hoverActive(gsapContext);
        mouseOver(gsapContext);
        imageSwitch(gsapContext);
        modal(gsapContext);
        pageTransition();
        marquee(gsapContext);
        textLinks(gsapContext);
        sliderComponent();
        tabsAnimation();

        if (!reduceMotion) {
          countUp(gsapContext);
          loop(gsapContext);
          textScrub(gsapContext);
          parallax(gsapContext);
          scrollIn(gsapContext);
          scrolling(gsapContext);
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

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();

  const updaterFooterYear = function () {
    // set the fs-hacks selector
    const YEAR_SELECTOR = '[data-footer-year]';
    // get the the span element
    const yearSpan = document.querySelector(YEAR_SELECTOR);
    if (!yearSpan) return;
    // get the current year
    const currentYear = new Date().getFullYear();
    // set the year span element's text to the current year
    yearSpan.innerText = currentYear.toString();
  };
  updaterFooterYear();
});
