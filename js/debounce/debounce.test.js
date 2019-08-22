import _ from "./debounce";

test("multiply call", async () => {
  let f = jest.fn(Function());
  let df = _.debounce(f, 100, true);
  let delayCall = (fn, delay) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(fn());
      }, delay);
    });
  await delayCall(df, 90);
  await delayCall(df, 90);
  await delayCall(df, 90);
  expect(f.mock.calls.length).toBe(1);
});

test("multiply call width efficient interval", async () => {
  let f = jest.fn(Function());
  let df = _.debounce(f, 100, true);
  let delayCall = (fn, delay) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(fn());
      }, delay);
    });
  await delayCall(df, 110);
  await delayCall(df, 110);
  await delayCall(df, 110);
  expect(f.mock.calls.length).toBe(3);
});

test("immediate is false", async () => {
  let f = jest.fn(Function());
  let df = _.debounce(f, 100, false);
  let delay = time =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  df();
  expect(f).not.toBeCalled();
  await delay(110);
  expect(f).toBeCalled();
});
