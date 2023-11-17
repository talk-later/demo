const join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`)
}

const curry = (fn) => {
    return curriedFn = (...args) => {
        if (args.length >= fn.length) return fn(...args)
        return (...args2) => curriedFn(...args, ...args2)
    }
}
 
const curriedJoin = curry(join)
 
curriedJoin(1, 2, 3) // '1_2_3'
 
curriedJoin(1)(2, 3) // '1_2_3'
 
curriedJoin(1, 2)(3) // '1_2_3'

curriedJoin(1)(3)(1)

