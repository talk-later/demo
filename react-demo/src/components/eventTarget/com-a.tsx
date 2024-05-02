import React from 'react'
import Message from './message.ts'

const CompA = () => {
    const [conut, setCount] = React.useState(0)


    // myEventTarget.addEventListener('AClick', () => {
    //     setCount(conut + 1)
    // })

    Message.on('AClick', () => {
        setCount(conut + 1)
    })

    return <div>
        {conut}
        <button onClick={() => {
            setCount(conut + 1)
        }}>A</button>
        <button onClick={() => {
            // myEventTarget.dispatchEvent(new CustomEvent('BClick'))
            Message.emit('BClick')
        }}>A - B</button>
    </div>
}

export default CompA