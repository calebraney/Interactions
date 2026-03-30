import { attr, checkRunProp, checkContainer, getAttrConfig, getIxConfig } from '../utilities';

export const accordion = function () {
  //animation ID
  const ANIMATION_ID = 'accordion';
  //elements
  const WRAP = '[data-ix-accordion="wrap"]';
  const ITEM = '[data-ix-accordion="item"]';
  const OPEN = '[data-ix-accordion="open"]';
  const ACTIVE_CLASS = 'is-active';

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  const wraps = [...document.querySelectorAll(WRAP)];
  // utility function to open or close accordions
  const openAccordion = function (item, open = true) {
    const trigger = item.querySelector(OPEN);
    //get state of items
    // const state = Flip.getState(item, {
    //   props: 'backgroundColor,margin',
    //   nested: true,
    //   absolute: false,
    // });
    if (open === true) {
      item.classList.add(ACTIVE_CLASS);
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.remove(ACTIVE_CLASS);
      trigger.setAttribute('aria-expanded', 'false');
    }
    // // animate elements
    // Flip.from(state, {
    //   duration: 0.6,
    //   ease: 'power1.out',
    //   onStart: () => {
    //     item.style.overflow = 'hidden';
    //   },
    //   onComplete: () => {
    //     if (open) {
    //       item.style.overflow = 'visible';
    //     }
    //     ScrollTrigger.refresh();
    //   },
    // });
  };
  ////////////////////////
  // event logic
  if (wraps.length === 0 || wraps === undefined) return;
  wraps.forEach((wrap) => {
    //check if the run prop is set to true
    let runProp = checkRunProp(wrap, ANIMATION_ID);
    if (runProp === false) return;
    // set up conditions for
    const config = getAttrConfig(wrap, ANIMATION_ID, {
      'first-open': false,
      'one-active': false,
      'keep-one-open': false,
      hover: false,
    });
    //get the first accordion item and all of the items
    const items = [...wrap.querySelectorAll(ITEM)];
    if (items.length === 0) return;
    const firstItem = items[0];
    if (config['first-open']) {
      openAccordion(firstItem);
    }
    if (!config.hover) {
      // Add event listener for when accordion lists are clicked
      wrap.addEventListener('click', function (e) {
        // check if the clicked element was the top of an accordion and get that accordion
        const clickedEl = e.target.closest(OPEN);
        if (!clickedEl) return;
        // get all the accordions within this list and the active item
        const clickedItem = clickedEl.closest(ITEM);
        // check if the clicked item is already active
        let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS);
        // if item is NOT ACTIVE
        if (!clickedItemAlreadyActive) {
          // check if oneActive is True
          if (config['one-active']) {
            // if one active is true loop through each item
            items.forEach((item) => {
              //if item is the current item Open
              if (item === clickedItem) {
                openAccordion(item);
              }
              //otherwise remove active class and close
              else {
                openAccordion(item, false);
              }
            });
          }
          if (!config['one-active']) {
            // if one active is false just set the current item to active and open it
            openAccordion(clickedItem);
          }
        }
        // if the current item IS ACTIVE and keep one open is false close it
        if (clickedItemAlreadyActive && !config['keep-one-open']) {
          openAccordion(clickedItem, false);
        }
        // if the current item IS ACTIVE and keep one open is true check how many items are active
        if (clickedItemAlreadyActive && config['keep-one-open']) {
          const activeItems = items.filter(function (item) {
            return item.classList.contains(ACTIVE_CLASS);
          });
          //if there are more than 1 items active close the current one
          if (activeItems.length > 1) {
            openAccordion(clickedItem, false);
          }
        }
      });
    }
    if (config.hover) {
      items.forEach((item) => {
        item.addEventListener('mouseover', function () {
          openAccordion(item);
        });
        item.addEventListener('mouseout', function () {
          openAccordion(item, false);
        });
      });
    }
  });
};
