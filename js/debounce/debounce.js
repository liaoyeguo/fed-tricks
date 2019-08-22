import _ from "../index";

_.debounce = (fn, wait = 0, immediate = false) => {
  let timer;

  return function() {
    const context = this;
    const args = arguments;
    const callNow = immediate && !timer;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (!immediate) fn.call(context, ...args);
      timer = null;
    }, wait);

    if (callNow) return fn.call(context, ...args);
  };
};

export default _;
