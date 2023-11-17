console.log('hello world')

const a = () => {
    console.log(111)
    try {
        // setTimeout(() => {
            JSON.parse('')
        // })
    } catch (error) {
        console.log(333, error)
    }
    console.log(2222)
}

a()