import React from 'react'
import Message from './message.ts'

const CompB = () => {
    const [conut, setCount] = React.useState(0)

    // myEventTarget.addEventListener('BClick', () => {
    //     setCount(conut + 1)
    // })

    Message.on('BClick', () => {
        setCount(conut + 1)
    })

    return <div>
        {conut}
        <button onClick={() => {
            setCount(conut + 1)
        }}>B</button>
         <button onClick={() => {
            // myEventTarget.dispatchEvent(new CustomEvent('AClick'))
            Message.emit('AClick')
        }}>B - A</button>
    </div>
}

export default CompB