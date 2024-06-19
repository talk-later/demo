const Pending = 'pending'
const Fulfilled = 'fulfilled'
const Rejected = 'rejected'

/**
 * 手写 Promise 核心原理，完整的 Promise/A+ 实现，通过了 Promise/A+ 官方872个测试用例测试
 */
class MyPromise {
    constructor(fn) {
        this.status = Pending
        this.value = null
        this.reason = null
        this.onFulfilledCallback = []
        this.onRejectedCallback = []
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (value) => {
        if (this.status === Pending) {
            this.status = Fulfilled
            this.value = value
            while (this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(this.value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === Pending) {
            this.status = Rejected
            this.reason = reason
            while (this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(this.reason)
            }
        }
    }

    then = (onFulfilled, onRejected) => {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

        const newPromise = new MyPromise((resolve, reject) => {
            if (this.status === Fulfilled) {
                setTimeout(() => {
                    try {
                        const res = onFulfilled(this.value)
                        resolvePromise(newPromise, res, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === Rejected) {
               setTimeout(() => {
                    try {
                        const res = onRejected(this.reason)
                        resolvePromise(newPromise, res, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
               })
            } else {
                this.onFulfilledCallback.push(() => {
                    setTimeout(() => {
                        try {
                            const res = onFulfilled(this.value)
                            resolvePromise(newPromise, res, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallback.push(() => {
                   setTimeout(() => {
                        try {
                            const res = onRejected(this.reason)
                            resolvePromise(newPromise, res, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                   })
                })
            }
        })
        return newPromise
    }

    // resolve 静态方法
    static resolve (parameter) {
        // 如果传入 MyPromise 就直接返回
        if (parameter instanceof MyPromise) {
        return parameter;
        }

        // 转成常规方式
        return new MyPromise(resolve =>  {
        resolve(parameter);
        });
    }

    // reject 静态方法
    static reject (reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }

     /**
     * Promise.prototype.catch()
     * @param {*} onRejected 
     * @returns 
     */
    catch (onRejected) {
        return this.then(undefined, onRejected)
    }

    /**
     * Promise.prototype.finally()
     * @param {*} callBack 无论结果是fulfilled或者是rejected，都会执行的回调函数
     * @returns 
     */
    finally(callBack) {
        return this.then(callBack, callBack)
    }

}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        throw new TypeError('Chaining cycle detected for promise');
    }

    if (x instanceof MyPromise) {
        x.then(y => {
            resolvePromise(promise2, y, resolve, reject)
        }, reject);
    } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
        try {
            var then = x.then;
        } catch (e) {
            return reject(e);
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (e) {
                if (called) return;
                called = true;

                reject(e);
            }
        } else {
            resolve(x);
        }
    } else {
        return resolve(x);
    }
}

MyPromise.deferred = function () {
    let result = {};
    result.promise = new MyPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
}

module.exports = MyPromise;