import { checkRunProp, getIxConfig } from '../utilities';

export const numberInput = function () {
  const ANIMATION_ID = 'numberInput';
  const WRAP = '[data-ix-number-input="wrap"]';
  const INPUT = '[data-ix-number-input="input"]';
  const INCREMENT = '[data-ix-number-input="increment"]';
  const DECREMENT = '[data-ix-number-input="decrement"]';

  const ixEnabled = getIxConfig(ANIMATION_ID, true);
  if (ixEnabled === false) return;

  const wraps = Array.from(document.querySelectorAll(WRAP));
  if (wraps.length === 0) return;

  wraps.forEach((wrap) => {
    if (checkRunProp(wrap, ANIMATION_ID) === false) return;

    const input = wrap.querySelector(INPUT);
    const incrementBtn = wrap.querySelector(INCREMENT);
    const decrementBtn = wrap.querySelector(DECREMENT);
    if (!input || !incrementBtn || !decrementBtn) return;

    const getMin = () => (input.hasAttribute('min') ? parseFloat(input.min) : -Infinity);
    const getMax = () => (input.hasAttribute('max') ? parseFloat(input.max) : Infinity);
    const getStep = () => (input.hasAttribute('step') ? parseFloat(input.step) : 1);

    const getValue = () => {
      const parsed = parseFloat(input.value);
      if (!isNaN(parsed)) return parsed;
      const min = getMin();
      return min === -Infinity ? 0 : min;
    };

    const updateButtons = (value) => {
      decrementBtn.disabled = value <= getMin();
      incrementBtn.disabled = value >= getMax();
    };

    const setValue = (newValue) => {
      const clamped = Math.min(Math.max(newValue, getMin()), getMax());
      const step = getStep();
      const decimals = (step.toString().split('.')[1] || '').length;
      input.value = decimals > 0 ? clamped.toFixed(decimals) : String(clamped);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    };

    incrementBtn.addEventListener('click', () => setValue(getValue() + getStep()));
    decrementBtn.addEventListener('click', () => setValue(getValue() - getStep()));

    // keep button states in sync when value changes (including from setValue above)
    input.addEventListener('input', () => updateButtons(getValue()));

    updateButtons(getValue());
  });
};
