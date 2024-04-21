import { Store } from "../Store";

export const LocalStorageStore: Store =  {
    getStorage(key: string): string | null {
        return localStorage.getItem(key);
    },
    setStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    },
    removeStorage(key: string): void {
        localStorage.removeItem(key);
    },
}