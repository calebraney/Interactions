import {
  attr,
  copyURL,
  scrollReset,
  updaterFooterYear,
  checkRunProp,
  checkContainer,
} from './utilities';
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
import { slider } from './interactions/slider';
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
    //first interactions
    lenis = initLenis();
    pageTransition();
    //match media interactions
    let mm = gsap.matchMedia();
    mm.add(
      {
        screen: '(width > 0px)', //required for the callback to run regardless.
        reduceMotion: '(prefers-reduced-motion: reduce)',
        highContrast: '(prefers-contrast: more)',
        noHover: '(hover: none)',
      },
      (gsapContext) => {
        let { reduceMotion, highContrast, noHover } = gsapContext.conditions;
        //functional interactions with conditional properties.
        load(reduceMotion);
        //conditional interactions (if reduce motion is off)
        if (!reduceMotion) {
          countUp();
          loop();
          textScrub();
          mouseOver();
          parallax();
          scrollIn();
          scrolling();
          pathHover();
        }
        //setup video players
        const [players, components] = [videoPlyr()];
        //pass the players into the lightbox code
        lightbox(gsapContext, players, components);
      }
    );
    //other interactions
    marquee();
    textLinks();
    slider();
    tabs();
    accordion();
    banner();
    clickActive();
    hoverActive();
    imageSwitch();
    modal(gsapContext, lenis);
  };
  gsapInit();

  //utilities
  copyURL();
  scrollReset();
  updaterFooterYear();
});
