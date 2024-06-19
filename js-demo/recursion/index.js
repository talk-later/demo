// 递归数组求和
const sum = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 爬楼梯递归版
const climbStairsR = (n) => {
    if (n < 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairsR(n - 1) + climbStairsR(n - 2);
}

console.log(climbStairsR(5))