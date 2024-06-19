const awaitFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(222)
        }, 1000)
    })
}




const func = async () => {
    try {
        await awaitFunc()
    } catch (e) {
        console.log('error', e)
        
    }
}

func()