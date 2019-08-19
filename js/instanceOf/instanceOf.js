let _ = _ || {};

_.instanceOf = (object, constructor) => {
  let proto = object.__proto__;
  while (proto) {
    if (proto && proto == constructor.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
};

export default _;
