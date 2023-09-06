function objectIterator() {
    const keys = Object.keys(this)
    let index = 0
    return {
        next: () => {
            const done = index >= keys.length
            const value = done ? undefined : this[keys[index]]
            index++
            return {
                done,
                value
            }
        }
    }
}

Object.prototype[Symbol.iterator] = objectIterator

const obj = {
    name: 'ttxbb',
    age: '18',
    sex: 'man'
}

for(let [key, value] of Object.entries(obj)) {
    console.log(key, value)
}