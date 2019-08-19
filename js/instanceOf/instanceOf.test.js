import _ from "./instanceOf";

test("_.instanceOf(new Constructor, Constructor)", () => {
  let Constructor = new Function();
  expect(_.instanceOf(new Constructor(), Constructor)).toBe(true);
});

test("change Constructor.prototype to {} before instance", () => {
  let Constructor = new Function();
  Constructor.prototype = {};
  let o = new Constructor();
  expect(_.instanceOf(o, Constructor)).toBe(true);
});

test("change Constructor.prototype to {} after instance", () => {
  let Constructor = new Function();
  let o = new Constructor();
  Constructor.prototype = {};
  expect(_.instanceOf(o, Constructor)).toBe(false);
});

test("fake proto", () => {
  let Constructor = new Function();
  let o = {};
  let proto = {};
  Constructor.prototype = proto;
  o.__proto__ = proto;
  expect(_.instanceOf(o, Constructor)).toBe(true);
});
