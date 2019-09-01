import _ from "../index";

class EventEmitter {
  listeners = {};
  on(event, cb) {
    this.listeners[event] = this.listeners[event] || [];
    if (this.listeners[event].indexOf(cb) === -1)
      this.listeners[event].push(cb);
    return this;
  }
  once(event, cb) {
    this.listeners[event] = this.listeners[event] || [];
    const f = (...args) => {
      cb.call(null, ...args);
      this.off(event, f);
    };
    this.listeners[event].push(f);
    return this;
  }
  off(event, cb) {
    const listeners = this.listeners[event];
    const index = listeners.indexOf(cb);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    return this;
  }
  emit(event, ...args) {
    let cbs = this.listeners[event] || [];
    cbs.forEach(cb => cb.call(null, ...args));
    return this;
  }
}

_.EventEmitter = EventEmitter;
export default _;
