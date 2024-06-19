import React, { useEffect } from 'react'
import './index.scss'

const runTask = (task) => {
    const _runTask = (callBack, resolve) => {
        const startTime = Date.now()
        requestAnimationFrame( async (time) => {
            console.log('requestAnimationFrame',time, Date.now())
            if (Date.now() - startTime < 16.6) {
                callBack()
                resolve(222)
            } else {
                _runTask(callBack, resolve)
            }
        })

    }
    return new Promise((resolve) => {
        // task()
        // resolve(222)
        // 见缝插针
        _runTask(task, resolve)
        // 微任务 
        // Promise.resolve().then(task).then(resolve)
        //宏任务
        // setTimeout(() => {
        //     task()
        //     resolve(222)
        // }, 0)
    })
}

export default function Index() {

    const task = () => {
        for (let i = 0; i < 100; i++) {
            console.log(Date.now())
        }
    }

    const handleClick = (arg) => {
        // console.log('开始了', arg)
        for (let i = 0; i < 1000; i++) {
            runTask(task)
        }
    }

    return (
        <>
            <button onClick={() => { handleClick(222) }}>dianji</button>
            <div>
                <div className={'circle'}></div>
                <div className={'circle'}></div>
            </div>
        </>

    )
}
