import _ from "../index"

_.partial = (fn, ...boundArgs) => {
    return function (...args) {
        const allArgs = boundArgs.concat(args);
        if (allArgs.length >= fn.length) {
            return fn.call(this, ...allArgs)
        } else {
            return _.partial(fn, ...allArgs)
        }
    }
}
export default _;