import { getAttrConfig, flattenDisplayContents, removeCMSList, getIxConfig } from '../utilities';

export const slider = function () {
  //animation ID
  const ANIMATION_ID = 'slider';
  // hero animation attribute
  const ATTRIBUTE = 'data-ix-slider';
  const SLIDER = "[data-ix-slider='component']";
  const NEXT = "[data-ix-slider='next']";
  const PREVIOUS = "[data-ix-slider='previous']";
  const PAGINATION = '.slider_bullet_list';
  const PAGINATION_BUTTON = 'slider_bullet_item';
  const PAGINATION_BUTTON_FILL = 'slider_bullet_item_fill';
  const SCROLLBAR = '.slider_scrollbar';
  const SCROLLBAR_HANDLE = 'slider_scrollbar_handle';
  //options
  const FOLLOW_FINGER = 'data-ix-slider-follow-finger';
  const MOUSEWHEEL = 'data-ix-slider-mousewheel';
  const FREE_MODE = 'data-ix-slider-free-mode';
  const SLIDE_TO_CLICKED = 'data-ix-slider-slide-to-clicked';
  const LOOP = 'data-ix-slider-loop';
  const SPEED = 'data-ix-slider-speed';
  const AUTOPLAY = 'data-ix-slider-autoplay';
  const CENTER_SLIDES = 'data-ix-slider-center-slides';
  const SHOW_AUTOPLAY_PROGRESS = 'data-ix-slider-show-autoplay-progress';

  const PAGINATION_TYPE = 'data-ix-slider-pagination-type'; //bullets, fraction, progressbar
  const ACTIVE_CLASS = 'is-active';

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  const sliders = document.querySelectorAll(`${SLIDER}:not(${SLIDER} ${SLIDER})`);
  sliders.forEach((component) => {
    if (component.dataset.scriptInitialized) return;
    component.dataset.scriptInitialized = 'true';

    const swiperElement = component.querySelector('.slider_element');
    const swiperWrapper = component.querySelector('.slider_list');
    if (!swiperElement || !swiperWrapper) return;

    flattenDisplayContents(swiperWrapper);

    removeCMSList(swiperWrapper);

    [...swiperWrapper.children].forEach((el) => el.classList.add('swiper-slide'));
    const followFinger = attr(true, swiperElement.getAttribute(FOLLOW_FINGER));
    const freeMode = attr(true, swiperElement.getAttribute(FREE_MODE));
    const mousewheel = attr(true, swiperElement.getAttribute(MOUSEWHEEL));
    const slideToClickedSlide = attr(false, swiperElement.getAttribute(SLIDE_TO_CLICKED));
    const loopMode = attr(false, swiperElement.getAttribute(LOOP));
    const speed = attr(600, swiperElement.getAttribute(SPEED));
    const autoplay = attr(0, swiperElement.getAttribute(AUTOPLAY)); //autoplay duration in MS
    const paginationType = attr('bullets', swiperElement.getAttribute(PAGINATION_TYPE)); //bullets, fraction, progressbar
    const centerSlides = attr(false, swiperElement.getAttribute(CENTER_SLIDES));
    const showAutoplayProgress = attr(true, swiperElement.getAttribute(SHOW_AUTOPLAY_PROGRESS));
    //create slider instance
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 'auto',
      followFinger: followFinger,
      freeMode: freeMode,
      slideToClickedSlide: slideToClickedSlide,
      centeredSlides: centerSlides,
      autoHeight: false,
      loop: loopMode,
      loopAdditionalSlides: 3,
      speed: speed,
      mousewheel: {
        enabled: mousewheel,
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoplay: autoplay === 0 ? false : { delay: autoplay * 1000 },
      navigation: {
        nextEl: component.querySelector(NEXT),
        prevEl: component.querySelector(PREVIOUS),
      },
      pagination: {
        type: paginationType,
        el: component.querySelector(`${PAGINATION}`),
        bulletActiveClass: ACTIVE_CLASS,
        bulletClass: `${PAGINATION_BUTTON}`,
        bulletElement: 'button',
        clickable: true,
        //version for fraction pagination with utility class
        renderFraction: function (currentClass, totalClass) {
          return (
            '<div class="u-text-style-small"><span class="' +
            currentClass +
            '"></span>' +
            ' of ' +
            '<span class="' +
            totalClass +
            '"></span> </div>'
          );
        },
      },
      scrollbar: {
        el: component.querySelector(SCROLLBAR),
        draggable: true,
        dragClass: SCROLLBAR_HANDLE,
        snapOnRelease: true,
      },
      slideActiveClass: ACTIVE_CLASS,
      slideDuplicateActiveClass: ACTIVE_CLASS,
    });
    //autoplay progress animation within pagination bullet
    if (autoplay > 0 && showAutoplayProgress) {
      const progressTL = gsap.timeline({ paused: false });
      progressTL.fromTo(
        component,
        { '--slider-autoplay-progress': '0%' },
        {
          '--slider-autoplay-progress': ' 100%',
          ease: 'none',
          duration: autoplay,
        }
      );
      //when slide changes, animate the progress fill
      swiper.on('slideChange', function () {
        progressTL.restart();
      });
    }
  });
};
