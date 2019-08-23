import _ from "../index"

_.bind = (fn, context, ...args) => (...resArgs) => {
    return fn.call(context, ...args, ...resArgs);
};
export default _;