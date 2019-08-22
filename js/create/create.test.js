import _ from "./create";

test("prototype chain", () => {
    let proto = {
        name: "lily"
    }
    let o = _.create(proto);
    expect(o.name).toBe("lily");
})