import { Store } from "../Store";

export const getStorage = (store: Store, key) => {
    // 获取本地存储
    return store.getStorage(key)
}

export const setStorage = (store: Store, key, value) => {
    // 设置本地存储
    return store.setStorage(key, value)
}

export const removeStorage = (store: Store, key) => {
    // 删除本地存储
    return store.removeStorage(key)
}