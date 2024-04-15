const aaa = Promise.resolve(222).then(res => {
    throw 'ysc'
})

console.log(aaa)


// Promise.resolve().then(() => {
//     console.log(0);
//     return Promise.resolve(4);
// }).then((res) => {
//     console.log(res)
// })

// Promise.resolve().then(() => {
//     console.log(1);
// }).then(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(5);
// }).then(() =>{
//     console.log(6);
// })


// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(22)
//     }, 3000)
// })

// console.log(a)