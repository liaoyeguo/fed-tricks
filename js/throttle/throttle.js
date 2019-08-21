import _ from "../index";

_.throttle = (fn, delay = 0) => {
  let previous = 0;
  return function() {
    let now = +new Date();
    let context = this;
    if (now - previous > delay) {
      previous = now;
      return fn.call(context, ...arguments);
    }
    return void 0;
  };
};
export default _;
