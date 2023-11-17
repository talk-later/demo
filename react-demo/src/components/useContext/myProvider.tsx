import React, { useState, createContext, useContext } from 'react'

const child1Context = createContext<any>(null)
const child2Context = createContext<any>(null)

export default function Provider(props) {
    const { children } = props
    const [ state, setState ] = useState(0)
    return (
        <child1Context.Provider value={state}>
            <child2Context.Provider value={setState}>
                {children}
            </child2Context.Provider>
        </child1Context.Provider>
    )
}

export const useGetState = () => {
    return useContext(child1Context)
}

export const useSetState = () => {
    return useContext(child2Context)
}
