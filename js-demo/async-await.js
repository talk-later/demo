// const fun1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(111)
//         }, 3000)
//     })
// }

// const fun2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(222)
//         }, 3000)
//     })
// }

// const fun3 = async () => {
//     return 222
// }

// const aaa = async () => {
//     // const a =  fun1()
//     // const b =  fun1()
//     // const a1 = await a
//     // const b1 = await b
//     // console.log(a, b, a1, b1)
//     const a = await fun3()
//     console.log(a)
// }

// aaa()

// const fun = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ysc')
//         }, 3000)
//     })
// }

// const fun1 = () => {
//     return fun()
// }

// const fun2 = () => {
//     return fun()
// }

// const test2 = async () => {
//   const res1 = await fun1()
//   const res2 = await fun2()
//   console.log(res1, res2) // 6s log, 前一个await阻塞
// }

// test2()

const generatorToAsync = (generatorFunc) => {
    // 首先先调用generator函数 生成迭代器
    const gen = generatorFunc()

    // 返回一个promise
    return new Promise((resolve, reject) => {
        // 内部定义一个step递归函数
        function step(key, arg) {
            let generatorResult
            try {
                // 执行next方法，或者报错后执行throw方法
                generatorResult = gen[key](arg)
            } catch (error) {
                return reject(error)
            }
            const { value, done } = generatorResult
            if (done) {
                // 全部的yield执行结束后，调用 resolve
                return resolve(value)
            } else {
                return Promise.resolve(value).then(res => {
                    step('next', res) // yield的value为promise，整出来传给next
                }, error => {
                    step('error', error)
                })
            }
        }
        step("next")
    })
}



const getData = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000)
    })
}

function* gen() {
    const num1 = yield getData(1)
    console.log(num1) // 2
    const num2 = yield getData(2)
    console.log(num2) // 4
    const num3 = yield getData(4)
    console.log(num3) // 8
    return 10
}

const asyncRes = generatorToAsync(gen)
console.log(asyncRes); // Promise {<pending>}
asyncRes.then(res => {
    console.log(10); // 3s 后返回 10
})

