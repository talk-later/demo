/**
 * 有效的括号
 * @param {string} s 
 * @returns {boolean}
 */
const isValid = (s) => {
    let stack = []
    const mapping = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    }
    for(let i of s) {
        if (i === '[' || i === '{' || i === '(') {
            stack.push(i)
        } else {
            if (stack.pop() !== mapping[i]) {
                return false
            }
        }
    }
    if (stack.length > 0) return false
    return true
};

const s = '[{}{}()]'
console.log(isValid(s))