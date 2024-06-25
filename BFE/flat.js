const flat = (arr, depth = 1) => {
    if (depth === 0) {
        return arr
    }
    return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? flat(curr, depth - 1) : curr)
    }, [])
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]

console.log(flat(arr, Infinity))