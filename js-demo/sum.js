// 递归数组求和
const sum = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + sum(arr.slice(1))
}

const arr = [1, 2, 3, 4, 5]

console.log(sum(arr))
console.log(arr)