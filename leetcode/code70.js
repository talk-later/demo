/**
 * 爬楼梯
 * @param {number} n 
 * @returns {number}
 */
const climbStairs = (n) => {
    let prevDouble = 0
    let prev = 1
    let total = 1
    for (let i = 1; i <= n; i++) {
        total = prev + prevDouble
        prevDouble = prev
        prev = total
    }
    return total
};

// 递归爬楼梯
const climbStairsR = (n) => {
    const _sum = (n) => {
        if (n === 1) return 1
        if (n === 2) return 2
        return _sum(n - 1) + _sum(n - 2)
    }
    return _sum(n)
};



const n = 5
console.log(climbStairsR(7))