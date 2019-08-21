import _ from "./throttle";
test("multiple call", () => {
  let f = jest.fn();
  let tf = _.throttle(f, 1000);
  let results = [];
  for (let i = 0; i < 1000; i++) {
    results[i] = tf();
  }
  expect(f.mock.calls.length).toBeGreaterThan(0);
  expect(f.mock.calls.length).toBeLessThan(1000);
  expect(results[1]).toBe(undefined);
});

test("bind this", () => {
  let f = jest.fn(function() {
    return this.name;
  });
  let tf = _.throttle(f);
  expect(tf.call({ name: "lily" })).toBe("lily");
});
