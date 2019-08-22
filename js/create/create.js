import _ from "../index";

_.create = (proto) => {
    const Ctor = new Function();
    Ctor.prototype = proto;
    return new Ctor;
}
export default _;