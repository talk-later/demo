import { Store } from '../Store'
import { SessionStorageStore } from '../sessionStorage/index.ts'


const service = (Store: Store) => {

    // 获取本地存储
    const getStorage = (key: string) => {
        return Store.getStorage(key)
    }

    // 设置本地存储
    const setStorage = (key: string, value: any) => {
        return Store.setStorage(key, value)
    }

    // 删除本地存储
    const removeStorage = (key: string) => {
        return Store.removeStorage(key)
    }
    
    return {
        getStorage,
        setStorage,
        removeStorage
    }
}

const store = service(SessionStorageStore)

export { store }

