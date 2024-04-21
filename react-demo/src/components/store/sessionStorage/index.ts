import { Store } from "../Store";

export const SessionStorageStore: Store = {

    // 存储数据
    setStorage(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    
    // 获取数据
    getStorage(key: string) {
        return JSON.parse(sessionStorage.getItem(key) || '');
    },
    
    // 删除数据
    removeStorage(key: string) {
        sessionStorage.removeItem(key);
    },

}