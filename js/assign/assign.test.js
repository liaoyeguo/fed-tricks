import _ from "./assign"


test("assgin one property", () => {
    const source = { name: "lily" };
    const des = {};
    _.assign(des, source);
    expect(des.name).toBe("lily");
})

test("pass multiple sources", () => {
    const sources = [{ name: "lily" }, { name: "job" }];
    const des = {};
    _.assign(des, ...sources);
    expect(des.name).toBe("job");
})

test("won't copy property from prototype chain", () => {
    const source = { name: "lily" };
    source.__propto__ = { age: 12 };
    const des = {};
    _.assign(des, source);
    expect(des.name).toBe("lily");
    expect(des.age).toBeUndefined()
})