import React, { useCallback, useEffect, useRef, useState } from 'react'

const useCountDown = (num, {onstart, onend}) => {
    const [count, setCount] = useState(0)
    let timer = useRef<any>()
    useEffect(() => {
        return () => {
            clearInterval(timer.current)
        }
    }, [])

    const start: any = useCallback(() => {
        setCount(num)
        onstart()
        timer.current = setInterval(() => {
            setCount((count) => {
                if (count === 1) {
                    onend()
                    clearInterval(timer.current)
                }
                return count - 1
            })
        }, 1000)
    }, [num, onstart, onend])
  return [ count, start]
}

export default function CountDown() {
    const onstart = () => {
        console.log(2222)
    }   
    const onend = () => {
        console.log(3333)
    }
    const [count, start] = useCountDown(3, {onstart, onend})
    const handleClick = () => {
        start()
    }

  return (
    <div>
        <button onClick={handleClick} disabled={count !== 0}>{count === 0 ? '点击开始3s倒计时' : `${count}秒后结束倒计时`}</button>
    </div>
  )
}
