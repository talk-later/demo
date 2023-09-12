/**
 * 回文数
 * @param {number} x 
 * @returns {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) return false
    if(Number(x.toString().split('').reverse().join('')) === x) return true
    return false
}

const x = 1212121
console.log(isPalindrome(x))