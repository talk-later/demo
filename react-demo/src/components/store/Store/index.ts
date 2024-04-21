export interface Store {
    setStorage: (key: string, value: any) => void;
    getStorage: (key: string) => any;
    removeStorage: (key: string) => void;
}