// curry

const curry = (fn) => {
    const _curry = (...args) => {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return (...args2) => {
                return _curry(...args, ...args2)
            }
        }
    }
    return _curry()
}

const join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`)
    return `${a}_${b}_${c}`
 }
 
 const curriedJoin = curry(join)
 
//  curriedJoin(1, 2, 3) // '1_2_3'

//  curriedJoin(1)(2, 3) // '1_2_3'
 
//  curriedJoin(1)(2)(3) // '1_2_3'


// curryPlaceholder
const curryPlaceholder = (fn) => {
    const _curry = (...args) => {
        console.log(args)
        if (args.length >= fn.length && args.slice(0, fn.length).every(item => item !== curryPlaceholder.placeholder)) {
            return fn.apply(this, args)
        } else {
            return (...args2) => {
                const newArg = args.map(arg => arg === curryPlaceholder.placeholder && args2.length ? args2.shift() : arg);
                return _curry(...newArg, ...args2)
            }
        }
    }
    return _curry()
}

curryPlaceholder.placeholder = Symbol()
 
 const curriedJoinP = curryPlaceholder(join)
 const _ = curryPlaceholder.placeholder
 
 curriedJoinP(1, 2, 3) // '1_2_3'

 curriedJoinP(_, 2)(1, 3) // '1_2_3'
 
 curriedJoinP(_, _, _)(1)(_, 3)(2) // '1_2_3'

 curriedJoinP(_,_,_,_)(_,2,_)(_,3)(1) // '1_2_3'