import React, { memo } from 'react'
import MyProvider, { useSetState, useGetState } from './myProvider.tsx'

export default function Index() {
    return (
        <div>
            <MyProvider>
                <div>
                    <Child1></Child1>
                    <Child2></Child2>
                </div>
            </MyProvider>
        </div>
    )
}

const Child1 = () => {
    const state = useGetState()
    return (
        <div>{state}</div>
    )
}

const Child2 = () => {
    const setState = useSetState()
    return (
        <button onClick={() => { setState((num) => num + 1) }}>click</button>
    )
}