import _ from "./promise"

test("promise and solve directly", () => {
    let p = _.Promise((resolve) => {
        resolve("res");
    });

    return p.then(res => expect(res).toBe('res'));
})

test("Promise and solve after wait", () => {
    let p = _.Promise((resolve) => {
        setTimeout(resolve("res"), 50);
    });

    return p.then(res => expect(res).toBe('res'));
})
test("Promise and reject", (done) => {
    let p = _.Promise((resolve, reject) => {
        reject("error");
    });
    return p.catch(res => { expect(res).toBe('error'); done() });
})
test("Promise.resolved", () => {
    let p = _.Promise.resolve('res')
    return p.then(res => expect(res).toBe('res'));
})

test("Promise.reject", () => {
    let p = _.Promise.reject('error')
    return p.catch(res => expect(res).toBe('error'));
})

test("Promise.all", () => {
    let ps = [];
    for (let i = 0; i < 2; i++) {
        ps[i] = _.Promise((resolve) => {
            setTimeout(resolve(i), i);
        });
    }
    _.Promise.all(ps).then(res => {
        expect(res).toHaveLength(2);
        expect(res[0]).toBe(0);
        expect(res[1]).toBe(1);
    });
})
test("Promise.all with reject", () => {
    let ps = [];
    ps[0] = _.Promise((resolve) => {
        setTimeout(resolve(0), 0);
    });
    ps[1] = _.Promise((resolve, reject) => {
        setTimeout(reject(1), 1);
    });
    _.Promise.all(ps).catch(res => {
        expect(res).toBe(1);
    });
})
test("Promise.race", () => {
    let ps = [];
    for (let i = 0; i < 2; i++) {
        ps[i] = _.Promise((resolve) => {
            setTimeout(resolve(i), 10 - i);
        });
    }
    _.Promise.race(ps).then(res => {
        expect(res).toBe(1);
    });
})