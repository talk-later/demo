/**
 * 爬楼梯
 * @param {number} n 
 * @returns {number}
 */
const climbStairs = (n) => {
    let a = 1
    let b = 1
    let c = 1
    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
};

const n = 45
console.log(climbStairs(n))