import React, { useLayoutEffect, useRef } from 'react'

export default function Canvas() {
    const CanvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const canvas = CanvasRef.current
        if (!canvas) return
        // 初始化canvas
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        // 绘制
        ctx.fillStyle = 'red'
        ctx.fillRect(10, 10, 400, 400)

        // 绘制文字
        ctx.font = '30px Arial'
        ctx.fillStyle = 'blue'
        ctx.fillText('Hello World', 10, 400)

        // 绘制图片
        // const img = new Image()
        // img.src = 'https://picsum.photos/1600'
        // img.onload = () => {
            //  ctx.drawImage(img, 10, 10, 400, 400)
        // }
        let a = 400
        const move = () => {
            requestAnimationFrame(move)
            a = a + 1
            canvas.width = a
            canvas.height = a
            ctx.fillRect(10, 10, a, a)

        }

        move()

    }, [])

    return (
        <div>
            <canvas id="canvas" ref={CanvasRef} ></canvas>
        </div>
    )
}
