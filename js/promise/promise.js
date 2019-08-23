import _ from "../index"

class MyPromise {
    state = "pending"
    result = null;
    onResolvedCbs = [];
    onRejectedCbs = [];
    constructor(executor) {

        let resolved = (result) => {
            if (this.state == "pending") {
                this.state = "fulfilled";
                this.result = result;
                this.clearCbs(this.onResolvedCbs);
            }

        }

        let rejected = (error) => {
            if (this.state == "pending") {
                this.state = "rejected";
                this.result = error;
                this.clearCbs(this.onRejectedCbs);
            }
        }
        executor(resolved, rejected);
    }

    then(onResolved, onRejected) {
        switch (this.state) {
            case "pending":
                this.onResolvedCbs.push(onResolved);
                this.onRejectedCbs.push(onRejected);
                break;
            case "fulfilled":
                typeof onResolved == "function" && onResolved(this.result);
                break;
            case "rejected":
                typeof onRejected == "function" && onRejected(this.result);
                break;
        }
        return this;
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    clearCbs(cbs) {
        for (let i = 0; i < cbs.length; i++) {
            typeof cbs[i] == "function" && cbs[i](this.result);
        }
    }
}


_.Promise = function (executor) {
    return new MyPromise(executor);
}
_.Promise.resolve = (result) => {
    return new MyPromise((resolve => resolve(result)));

}
_.Promise.reject = (error) => {
    return new MyPromise((undefined, reject => reject(error)));
}
_.Promise.all = (promises) => {
    let results = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promise.then((res) => {
                results[i] = res;
                if (count++ == promises.length)
                    resolve(results);
            }).catch(error => {
                reject(error);
            })
        }
    })
}

_.Promise.race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let promise in promises) {
            promise.then(res => resolve(res)).catch(error => reject(error))
        }
    })
}
export default _;