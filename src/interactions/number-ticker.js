import { attr, checkRunProp, checkContainer } from '../utilities';

/*
CSS to include in page head:

<style>
  [data-ix-ticker="item"] {
    display: inline-flex;
    overflow: hidden;
    line-height: 1;
  }
  .ticker_column {
    display: inline-flex;
    flex-direction: column;
    line-height: 1;
  }
  .ticker_digit {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ticker_separator {
    display: inline-flex;
    align-items: center;
  }
</style>
*/

export const numberTicker = function () {
  //animation ID
  const ANIMATION_ID = 'ticker';
  //elements
  const ITEM = '[data-ix-ticker="item"]'; // the element that contains the target number as text content
  //options
  const DURATION = 'data-ix-ticker-duration'; // animation duration per digit column (default 1.5)
  const STAGGER = 'data-ix-ticker-stagger'; // delay between each digit animating in (default 0.1)
  const EASE = 'data-ix-ticker-ease'; // easing (default 'power2.out')
  const DIRECTION = 'data-ix-ticker-direction'; // "up" or "down" — which way digits roll in (default 'down')
  const START = 'data-ix-ticker-start'; // ScrollTrigger start (default 'top 90%')
  const TRIGGER_TYPE = 'data-ix-ticker-trigger'; // "scroll" (default) or "load"
  const START_FROM = 'data-ix-ticker-start-from'; // number to start from (default 0)
  const ACTIVE_CLASS = 'data-ix-ticker-active-class'; // class added to item on complete (default 'is-active')
  const USE_GROUPING = 'data-ix-ticker-use-grouping'; // if true, format with commas/periods (default true)

  //CSS classes for generated elements
  const COLUMN_CLASS = 'ticker_column';
  const DIGIT_CLASS = 'ticker_digit';
  const SEPARATOR_CLASS = 'ticker_separator';

  const items = [...document.querySelectorAll(ITEM)];
  if (items.length === 0) return;

  items.forEach((item) => {
    if (!item) return;

    //check if the run prop is set to true
    let runProp = checkRunProp(item, ANIMATION_ID);
    if (runProp === false) return;

    const animation = function () {
      // Read options
      let duration = attr(1.5, item.getAttribute(DURATION));
      let stagger = attr(0.1, item.getAttribute(STAGGER));
      let ease = attr('power2.out', item.getAttribute(EASE));
      let direction = attr('down', item.getAttribute(DIRECTION));
      let start = attr('top 90%', item.getAttribute(START));
      let triggerType = attr('scroll', item.getAttribute(TRIGGER_TYPE));
      let startFrom = attr(0, item.getAttribute(START_FROM));
      let activeClass = attr('is-active', item.getAttribute(ACTIVE_CLASS));
      let useGrouping = attr(true, item.getAttribute(USE_GROUPING));

      // Get the target number from text content
      const rawText = item.textContent.trim();
      // Strip existing formatting (commas, spaces) to get the pure number
      const cleanedText = rawText.replace(/[,\s]/g, '');
      const targetNumber = parseFloat(cleanedText);
      if (isNaN(targetNumber)) return;

      // Determine decimal places from the original text
      const decimalParts = cleanedText.split('.');
      const decimalPlaces = decimalParts.length > 1 ? decimalParts[1].length : 0;

      // Format target number and start number as strings
      const formatNumber = function (num) {
        let formatted;
        if (decimalPlaces > 0) {
          formatted = Math.abs(num).toFixed(decimalPlaces);
        } else {
          formatted = Math.abs(Math.round(num)).toString();
        }
        // Add grouping (commas) if enabled
        if (useGrouping) {
          const parts = formatted.split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          formatted = parts.join('.');
        }
        // Add negative sign if needed
        if (num < 0) {
          formatted = '-' + formatted;
        }
        return formatted;
      };

      const targetString = formatNumber(targetNumber);
      const startString = formatNumber(startFrom);

      // Detect any prefix or suffix around the number (e.g. "$", "%", "k")
      // Match text before and after the number in the original raw text
      const numberMatch = rawText.match(/^([^0-9\-]*)([\-]?[\d,.\s]+)([^0-9]*)$/);
      const prefix = numberMatch ? numberMatch[1] : '';
      const suffix = numberMatch ? numberMatch[3] : '';

      // Clear the element and build the ticker DOM structure
      item.textContent = '';
      item.setAttribute('aria-label', rawText);

      // Add prefix as a static separator
      if (prefix) {
        const prefixEl = document.createElement('span');
        prefixEl.classList.add(SEPARATOR_CLASS);
        prefixEl.textContent = prefix;
        prefixEl.setAttribute('aria-hidden', 'true');
        item.appendChild(prefixEl);
      }

      // Build digit columns for the target number
      // Each digit gets a vertical column of 0-9 that scrolls to the correct position
      const columns = [];
      const targetDigits = targetString.replace('-', '');
      const startDigits = startString.replace('-', '');

      for (let i = 0; i < targetDigits.length; i++) {
        const char = targetDigits[i];

        // Non-digit characters (commas, decimals) are static separators
        if (isNaN(parseInt(char))) {
          const sep = document.createElement('span');
          sep.classList.add(SEPARATOR_CLASS);
          sep.textContent = char;
          sep.setAttribute('aria-hidden', 'true');
          item.appendChild(sep);
          continue;
        }

        // Create a column with digits 0–9 stacked vertically
        const column = document.createElement('span');
        column.classList.add(COLUMN_CLASS);
        column.setAttribute('aria-hidden', 'true');

        for (let d = 0; d <= 9; d++) {
          const digitEl = document.createElement('span');
          digitEl.classList.add(DIGIT_CLASS);
          digitEl.textContent = d;
          column.appendChild(digitEl);
        }

        item.appendChild(column);

        // Store the target digit and starting digit for this column
        const targetDigit = parseInt(char);
        const startDigit = i < startDigits.length ? parseInt(startDigits[i]) || 0 : 0;

        columns.push({ element: column, targetDigit, startDigit });
      }

      // Add suffix as a static separator
      if (suffix) {
        const suffixEl = document.createElement('span');
        suffixEl.classList.add(SEPARATOR_CLASS);
        suffixEl.textContent = suffix;
        suffixEl.setAttribute('aria-hidden', 'true');
        item.appendChild(suffixEl);
      }

      // After building the DOM, measure a single digit height
      // All digits should be the same size since they share font styles from the parent
      if (columns.length === 0) return;
      const firstDigitEl = columns[0].element.querySelector(`.${DIGIT_CLASS}`);
      const digitHeight = firstDigitEl.offsetHeight;

      // Set each column to its starting digit position
      columns.forEach(({ element, startDigit }) => {
        gsap.set(element, { y: -startDigit * digitHeight });
      });

      // Create the animation
      const animateColumns = function () {
        const tl = gsap.timeline({
          onComplete: () => {
            item.classList.add(activeClass);
          },
        });

        columns.forEach(({ element, targetDigit }, index) => {
          const targetY = -targetDigit * digitHeight;

          // Calculate the stagger position for this column
          // Rightmost digits animate first for a "counting" feel (like an odometer)
          let position;
          if (direction === 'down') {
            // Right to left: last column starts first
            position = (columns.length - 1 - index) * stagger;
          } else {
            // Left to right: first column starts first
            position = index * stagger;
          }

          tl.to(
            element,
            {
              y: targetY,
              duration: duration,
              ease: ease,
            },
            position
          );
        });

        return tl;
      };

      // Trigger based on type
      if (triggerType === 'load') {
        // Animate immediately on load
        animateColumns();
      } else {
        // Animate on scroll entry
        ScrollTrigger.create({
          trigger: item,
          start: start,
          once: true, // only play once
          onEnter: () => {
            animateColumns();
          },
        });
      }
    };

    //check container breakpoint and run callback.
    const breakpoint = attr('none', item.getAttribute(`data-ix-${ANIMATION_ID}-breakpoint`));
    checkContainer(item, breakpoint, animation);
  });
};
