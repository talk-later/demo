import React from 'react'
import { store } from './service/index.ts'

export default function Index() {

    const [count, setCount] = React.useState('')

    const handleClick = (type) => {
        if (type === 'add') {
            store.setStorage('stroe', 'add')
            setCount(store.getStorage('stroe'))
        } else {
            store.removeStorage('stroe')
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
