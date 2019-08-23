import _ from "./partial"

test("addition function test", () => {
    let f = function (a, b, c) {
        return a + b + c;
    };
    f = _.partial(f, 1, 2);
    expect(f(3)).toBe(6);
})

test("partial and bind context", () => {
    let f = function (a, b, c) {
        return this.base + a + b + c;
    };
    f = _.partial(f, 1, 2);
    const context = { base: 10 };
    expect(f.call(context, 3)).toBe(16);
})