
// const deepClone = (value) => {
//     const mapValue = new WeakMap() // 用于存储已经克隆过的对象，避免循环引用，写在外面不用重复创建/作为一个参数
//     const _deepClone = (value) => {
//         if (typeof value !== 'object' || value === null) {
//             return value
//         }
//         if (mapValue.has(value)) {
//             return mapValue.get(value)
//         }
//         const newValue = Array.isArray(value) ? [] : {}
//         mapValue.set(value, newValue)
//         for (let key in value) {
//             newValue[key] = _deepClone(value[key])
//         }
//         return newValue
//     }
//     const newValue = _deepClone(value)
//     return newValue
// }

const deepClone = (value, map = new Map()) => {
    if (typeof value !== 'object' || value === null) {
        return value
    }
    if (map.has(value)) {
        return map.get(value)
    }
    const newValue = Array.isArray(value) ? [] : {}
    map.set(value, newValue)
    for (let key in value) {
        newValue[key] = deepClone(value[key], map)
    }
    return newValue
}

const Info = {
    name : 'ysc',
    age: 18,
    likes: ['sleeping','eating', {name: 'ysc'}],
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

Info.info = Info // 循环引用

const cloneInfo = deepClone(Info)

console.log('Info', Info)
console.log('cloneInfo', cloneInfo)
console.log('Info === cloneInfo', Info === cloneInfo)

cloneInfo.likes[2].name = 'zzt'
console.log('Info', Info)
console.log('cloneInfo', cloneInfo)





