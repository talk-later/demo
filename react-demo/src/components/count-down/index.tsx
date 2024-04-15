import React, { useCallback, useEffect, useRef, useState } from 'react'

const useCountDown = (num, {onTimeStart, onTimeEnd}) => {
    const [count, setCount] = useState(0)
    let timer = useRef<any>()

    useEffect(() => {
        return () => {
            clearInterval(timer.current)
        }
    }, [])

    const start: any = useCallback(() => {
        if(timer.current) clearInterval(timer.current)
        setCount(num)
        onTimeStart()
        timer.current = setInterval(() => {
            setCount((count) => {
                if (count === 1) {
                    onTimeEnd()
                    clearInterval(timer.current)
                }
                return count - 1
            })
        }, 1000)
    }, [num, onTimeStart, onTimeEnd])
  return [ count, start]
}

// 倒计时剩余的时间
const initEndTime = (end: string) => {
    const now = new Date()
    const endTime = new Date(end)
    const timeDiff = endTime - now
    if (timeDiff < 1000) {
        return { remainTime: '00:00', isEnd: true }
    } 
    const minutes = ('00' + Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    const seconds = ('00' + Math.floor((timeDiff % (1000 * 60)) / 1000)).slice(-2)
    console.log(minutes, seconds)
    return {remainTime: `${minutes}:${seconds}`, isEnd: false}
}

/**
 * 
 * @param end // 结束时间
 * @param Callback // 开始、结束倒计时回调
 * @returns
 */
const useCountDownToEnd = (end: string, {onTimeStart, onTimeEnd}) => {
    const [time, setTime] = useState(() => initEndTime(end).remainTime)
    let timer = useRef<any>()
    useEffect(() => {
        return () => {
            clearInterval(timer.current)
        }
    }, [])
    // 开始倒计时
    const start:any = useCallback(() => {
        if(timer.current) clearInterval(timer.current)
        const {remainTime, isEnd} = initEndTime(end)
        if (isEnd) {
            onTimeEnd()
            return
        }
        setTime(remainTime)
        onTimeStart()
        timer.current = setInterval(() => {
            const {remainTime, isEnd} = initEndTime(end)
            if (isEnd) {
                clearInterval(timer.current)
                onTimeEnd()
            }
            setTime(remainTime)
        }, 1000)
    }, [end, onTimeStart, onTimeEnd])
  return [ time, start]
}

export default function CountDown() {
    const onTimeStart = useCallback(() => {
        console.log(2222)
    }, [])   
    const onTimeEnd = useCallback(() => {
        console.log(3333)
    }, [])
    const [count, start] = useCountDownToEnd('2023/11/28 16:59', {onTimeStart, onTimeEnd})
    useEffect(() => {
        start()
    }, [start])
    const handleClick = () => {
        start()
    }
    

  return (
    <div>
        {/* <button onClick={handleClick} disabled={count !== 0}>{count === 0 ? '点击开始3s倒计时' : `${count}秒后结束倒计时`}</button> */}
        <button onClick={handleClick}>点击开始倒计时</button>
        <h2>{count}</h2>
    </div>
  )
}
