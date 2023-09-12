/**
 * 最长公共前缀
 * @param {string[]} strs 
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
    let ans = strs[0]
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] !== ans[j]) {
                ans = ans.slice(0, j)
            }
            if (j === strs[i].length - 1) {
                ans = ans.slice(0, j +1)
            }
        }
        if (strs[i] === '') return ''
    }
    return ans
};

const strs = ['ttxbb', 'ttx', 'tdmiw']
console.log(longestCommonPrefix(strs))