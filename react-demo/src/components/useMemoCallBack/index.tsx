import React, { useState, memo, useMemo, useCallback } from 'react'

export default function Index() {
    const [count, setCount] = useState([111])
    const handleClick = () => {
        setCount([111])
    }
    const data = useMemo(() => count, [count[0]])
    const onClick = useCallback(() => {}, [count[0]])
  return (
    <div>
        <Child data={data} onClick={onClick}></Child>
        <button onClick={handleClick}>222</button>
    </div>
  )
}

const Child = memo((props: any) => {
    return <div>子组件</div>
})