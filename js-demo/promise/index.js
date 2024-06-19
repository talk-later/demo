const Pending = 'pending'
const Fulfilled = 'fulfilled'
const Rejected = 'rejected'


class MyPromise {
    constructor(fn) {
        this.status = Pending
        this.value = null
        this.reason = null
        this.onFulfilledCallback = []
        this.onRejectedCallback = []
        try {
            fn(this.resolve, this.reject)
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

        return new MyPromise((resolve, reject) => {
            if (this.status === Fulfilled) {
                try {
                    const res = onFulfilled(this.value)
                    if (res instanceof MyPromise) {
                        res.then(resolve, reject)
                    } else {
                        resolve(res)
                    }
                } catch (error) {
                    reject(error)
                }
            } else if (this.status === Rejected) {
                try {
                    const res = onRejected(this.reason)
                    if (res instanceof MyPromise) {
                        res.then(resolve, reject)
                    } else {
                        resolve(res)
                    }
                } catch (error) {
                    reject(error)
                }
            } else {
                this.onFulfilledCallback.push(() => {
                    try {
                        const res = onFulfilled(this.value)
                        if (res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res)
                        }
                    } catch (error) {
                        reject(error)
                    }
                })
                this.onRejectedCallback.push(() => {
                    try {
                        const res = onRejected(this.reason)
                        if (res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res)
                        }
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })
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

}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
})

//  console.log(promise)

promise.then(value => {
    console.log('resolve', value)
    throw new Error('error')
}, reason => {
    console.log('reject', reason)
}).then(res => {
    console.log('resolve2', res)
}, reason => {
    console.log('reject2', reason)
    return new Error('error3')
}).then(res => {
    console.log('resolve3', res)
}, reason => {
    console.log('reject3', reason)
})



