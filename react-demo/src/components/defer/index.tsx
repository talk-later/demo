import React, { useCallback, useRef } from 'react'

const useDefer = () => {

    const count = useRef(0)

    const updateFrame = () => {
        if (count.current >= 1000) {
            return
        }
        count.current = count.current + 1
        requestAnimationFrame(updateFrame)
    }

    updateFrame()

    const a: (n:number) => boolean = useCallback((n) => {
        console.log('n', n, count.current)
        return n > count.current
    }, [count])

    return  a
}

export default function Defer() {

    const isDefer = useDefer()


    const renderBigComp = () => {
        const arr = new Array(1).fill(1)
        return <div>
            {arr.map((item, index) => {
                return <div key={index}>{index + Math.random()}</div>
            })}
        </div>
    }

  return (
    <div>
        {
            new Array(100).fill(1).map((item, index) => {
                const isShow = isDefer(index)
                if (!isShow) return null
                return <div key={index}>
                    {index}{renderBigComp()}
                </div>
            }
            )
        }
    </div>
  )
}
