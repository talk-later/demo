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

const n = 5
console.log(climbStairs(n))