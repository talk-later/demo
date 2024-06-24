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
  key: '1',
  value: '2'
}

for (const iterator of obj) {
  console.log(iterator)
}