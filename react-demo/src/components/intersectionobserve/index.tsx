import React, { useEffect } from 'react'

export default function Index() {
    // 创建一个IntersectionObserver实例
    const observer = new IntersectionObserver((entries) => {
        // 遍历观察到的元素
        entries.forEach((entry) => {
            // 如果元素可见，则添加一个类名
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    }, {
        root: null,
        rootMargin: '44px',
        threshold: 0,
    })

    useEffect(() => {
        document.createElement('video');
        // 选择要观察的元素
        const textObserves = document.querySelectorAll('.text-observe')
        // 遍历元素并添加观察器
        textObserves.forEach((textObserve) => {
            observer.observe(textObserve)
        })
    }, [])

  return (
    <div>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
        <h1 className='text-observe'>2222</h1>
    </div>
  )
}
