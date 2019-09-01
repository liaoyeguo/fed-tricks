import _ from "./event-emitter";

test("register with event", () => {
  const emitter = new _.EventEmitter();
  const f = jest.fn();
  emitter.on("request", f);
  expect(f).toHaveBeenCalledTimes(0);
  emitter.emit("request");
  expect(f).toHaveBeenCalledTimes(1);
  emitter.emit("request");
  expect(f).toHaveBeenCalledTimes(2);
});
test("unregiste event", () => {
  const emitter = new _.EventEmitter();
  const f = jest.fn();
  emitter.on("request", f);
  expect(f).toHaveBeenCalledTimes(0);
  emitter.emit("request");
  expect(f).toHaveBeenCalledTimes(1);
  emitter.off("request", f);
  emitter.emit("request");
  expect(f).toHaveBeenCalledTimes(1);
});
test("register with once", () => {
  const emitter = new _.EventEmitter();
  const f = jest.fn();
  emitter.once("request", f);
  expect(f).toHaveBeenCalledTimes(0);
  emitter.emit("request");
  emitter.emit("request");
  expect(f).toHaveBeenCalledTimes(1);
});

test("call with parameters", () => {
  const emitter = new _.EventEmitter();
  const f = jest.fn();
  emitter.on("request", f);
  expect(f).toHaveBeenCalledTimes(0);
  emitter.emit("request", 1, 2);
  expect(f).toHaveBeenCalledTimes(1);
  expect(f).toHaveBeenCalledWith(1, 2);
});

test("call onece with parameters", () => {
  const emitter = new _.EventEmitter();
  const f = jest.fn();
  emitter.once("request", f);
  expect(f).toHaveBeenCalledTimes(0);
  emitter.emit("request", 1, 2);
  expect(f).toHaveBeenCalledTimes(1);
  expect(f).toHaveBeenCalledWith(1, 2);
  emitter.emit("request", 1, 2);
  expect(f).toHaveBeenCalledTimes(1);
});
