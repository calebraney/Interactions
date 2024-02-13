import { attr } from './utilities';

export const mouseOver = function () {
  //elements
  const MOUSEOVER_WRAP = '[data-ix-mouseover="wrap"]';
  const MOUSEOVER_LAYER = '[data-ix-mouseover="layer"]';
  const MOUSEOVER_TARGET = '[data-ix-mouseover="target"]';
  //options
  const MOUSEOVER_DURATION = 'data-ix-mouseover-duration';
  const MOUSEOVER_EASE = 'data-ix-mouseover-ease';
  const MOUSEOVER_MOVE_X = 'data-ix-mouseover-move-x';
  const MOUSEOVER_MOVE_Y = 'data-ix-mouseover-move-y';
  const MOUSEOVER_ROTATE_Z = 'data-ix-mouseover-rotate-z';

  // select the items
  const mouseOverItems = document.querySelectorAll(MOUSEOVER_WRAP);
  mouseOverItems.forEach((mouseOverItem) => {
    const layers = mouseOverItem.querySelectorAll(MOUSEOVER_LAYER);
    // return if items are null
    if (layers.length === 0) return;
    // find the target element if one exists, otherwise tge parent is the target
    let target = mouseOverItem.querySelector(MOUSEOVER_TARGET);
    if (!target) {
      target = mouseOverItem;
    }

    //handle mouse movement
    const mouseMove = function () {
      /////////////////////////
      // Setting up Timeline

      // object that stores the value of the progress so it can be animated
      let initialProgress = { x: 0.5, y: 0.5 };
      let progressObject = { x: initialProgress.x, y: initialProgress.y };
      //create default duration and ease
      let duration = attr(0.5, mouseOverItem.getAttribute(MOUSEOVER_DURATION));
      let ease = attr('power1.out', mouseOverItem.getAttribute(MOUSEOVER_EASE));
      // Create X timeline
      let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
      // Create Y Timeline
      let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
      // For each image add a tween on the timeline

      //////////////////////
      // Adding tweens
      layers.forEach((layer) => {
        // get custom move amounts or set them at the default of 10%
        let moveX = attr(10, layer.getAttribute(MOUSEOVER_MOVE_X));
        let moveY = attr(10, layer.getAttribute(MOUSEOVER_MOVE_Y));
        let rotateZ = attr(0, layer.getAttribute(MOUSEOVER_ROTATE_Z));
        // horizontal timeline
        cursorXTimeline.fromTo(
          layer,
          { xPercent: moveX * -1, rotateZ: rotateZ * -1 },
          { xPercent: moveX, rotateZ: rotateZ },
          0
        );
        //vertical timeline
        cursorYTimeline.fromTo(layer, { yPercent: moveY * -1 }, { yPercent: moveY }, 0);
      });

      //////////////////////
      // Function to update timeline progress based on an inputted value
      function setTimelineProgress(xValue, yValue) {
        // animate the timeline progress value and keep the timeline in sync onUpdate
        gsap.to(progressObject, {
          x: xValue,
          y: yValue,
          ease: ease,
          duration: duration,
          onUpdate: () => {
            cursorXTimeline.progress(progressObject.x);
            cursorYTimeline.progress(progressObject.y);
          },
        });
      }
      //Set the initial progress of the timeline
      setTimelineProgress(initialProgress.x, initialProgress.y);

      //////////////////////
      // Mouse events
      target.addEventListener('mousemove', function (e) {
        // get bounding rect of target
        const rect = target.getBoundingClientRect();
        // current mouse position - left offset of target: normalized with the targets width
        let mousePercentX = gsap.utils.clamp(
          0,
          1,
          gsap.utils.normalize(0, rect.width, e.clientX - rect.left)
        );
        // current mouse position - top offset of target: normalized with the targets height
        let mousePercentY = gsap.utils.clamp(
          0,
          1,
          gsap.utils.normalize(0, rect.height, e.clientY - rect.top)
        );
        // set the timeline progress
        setTimelineProgress(mousePercentX, mousePercentY);
      });
      target.addEventListener('mouseleave', function (e) {
        // on mouse leave set back to default state
        setTimelineProgress(initialProgress.x, initialProgress.y);
      });
    };
    mouseMove();
  });
};

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

export const textLinks = function () {
  //items
  const TXT_LINK_WRAP = '[data-ix-text-link="wrap"]';
  const TXT_LINK_FRONT = '[data-ix-text-link="front"]';
  const TXT_LINK_BACK = '[data-ix-text-link="back"]';
  const items = gsap.utils.toArray(TXT_LINK_WRAP);
  items.forEach((item) => {
    if (!item) return;
    const front = item.querySelector(TXT_LINK_FRONT);
    const back = item.querySelector(TXT_LINK_BACK);
    if (!front || !back) return;
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.4,
        ease: 'power1.out',
      },
    });
    tl.fromTo(
      front,
      {
        y: '200%',
        rotateZ: 6,
      },
      {
        y: '0%',
        rotateZ: 0,
      }
    );
    tl.fromTo(
      back,
      {
        y: '0%',
        rotateZ: 0,
      },
      {
        y: '-200%',
        rotateZ: -6,
      },
      0
    );
    item.addEventListener('mouseover', function () {
      tl.play();
    });
    item.addEventListener('mouseleave', function () {
      tl.reverse();
    });
  });
};

const cursor = function () {
  //elements
  const CURSOR_WRAP = '[data-ix-cursor="wrap"]';
  const CURSOR_INNER = '[data-ix-cursor="inner"]';
  const CURSOR_DOT = '[data-ix-cursor="dot"]';
  const CURSOR_HOVER = '[data-ix-cursor="hover"]';
  const CURSOR_NO_HOVER = '[data-ix-cursor="no-hover"]';
  const HOVER_CLASS = 'is-hover';
  // select the items
  const cursorWrap = document.querySelector(CURSOR_WRAP);
  const cursorInner = document.querySelector(CURSOR_INNER);
  const cursorDot = document.querySelector(CURSOR_DOT);

  // return if items are null
  if (!cursorWrap || !cursorInner) return;

  const cursorHover = function () {
    // get all links without a no-hover attribute and any other elements with a hover attribute into an array
    const hoverElements = gsap.utils.toArray(
      `${CURSOR_HOVER}, :is(a, button):not(${CURSOR_NO_HOVER})`
    );
    hoverElements.forEach((item) => {
      if (!item || !cursorDot) return;
      item.addEventListener('mouseover', function (e) {
        cursorDot.classList.add(HOVER_CLASS);
      });
      item.addEventListener('mouseleave', function (e) {
        cursorDot.classList.remove(HOVER_CLASS);
      });
    });
  };
  cursorHover();
  const cursorClick = function () {
    if (!cursorDot) return;
    document.addEventListener('click', function (e) {
      let tl = gsap.timeline({});
      tl.fromTo(cursorDot, { rotateZ: -45 }, { rotateZ: 45, ease: 'power1.out', duration: 0.3 });
    });
  };
  cursorClick();

  //handle cursor movement
  const cursorMove = function () {
    // object that stores the value of the progress so it can be animated
    let progressObject = { x: 0, y: 0 };

    // Create X timeline
    let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    cursorXTimeline.fromTo(cursorInner, { x: '-50vw' }, { x: '50vw' });
    // Create Y Timeline
    let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    cursorYTimeline.fromTo(cursorInner, { y: '-50vh' }, { y: '50vh' });

    // Function to update timeline progress based on an inputted value
    function setTimelineProgress(xValue, yValue) {
      // animate the timeline progress value and keep the timeline in sync onUpdate
      gsap.to(progressObject, {
        x: xValue,
        y: yValue,
        ease: 'none',
        duration: 0,
        onUpdate: () => {
          cursorXTimeline.progress(progressObject.x);
          cursorYTimeline.progress(progressObject.y);
        },
      });
      // an alternate option if you want the timeline progress to jump immediately without easing (will be choppier)
      // tl.progress(progressValue)
    }

    // Mouse events
    document.addEventListener('mousemove', function (e) {
      // getting the horizontal and vertical positions of the mouse and dividing it by the total screen width
      let mousePercentX = e.clientX / window.innerWidth;
      let mousePercentY = e.clientY / window.innerHeight;
      // call function to animate the timeline progress
      setTimelineProgress(mousePercentX, mousePercentY);
    });
  };
  cursorMove();
};
