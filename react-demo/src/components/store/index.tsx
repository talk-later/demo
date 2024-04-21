import React from 'react'
// import { LocalStorageStore } from './localStorage/index.ts'
import { SessionStorageStore } from './sessionStorage/index.ts'
import { getStorage, setStorage, removeStorage } from './service/index.ts'

export default function Index() {

    const [count, setCount] = React.useState('')

    const handleClick = (type) => {
        if (type === 'add') {
            setStorage(SessionStorageStore, 'count', 'add')
            setCount(getStorage(SessionStorageStore, 'count'))
        } else {
            removeStorage(SessionStorageStore, 'count')
            setCount('')
        }
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { handleClick('add') }}>add</button>
            <button onClick={() => { handleClick('remove') }}>remove</button>
        </div>
    )
}
