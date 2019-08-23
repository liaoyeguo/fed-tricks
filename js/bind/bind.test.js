import _ from "./bind";

test("bind context", () => {
    const context = { name: "lily" };
    let f = function () {
        return this.name;
    };
    f = _.bind(f, context);
    expect(f()).toBe("lily");
})

test("bind context and arguments", () => {
    const context = { name: "lily" };
    let f = function (greeting) {
        return greeting + " " + this.name;
    };
    f = _.bind(f, context, "hellow");
    expect(f()).toBe("hellow lily");
})