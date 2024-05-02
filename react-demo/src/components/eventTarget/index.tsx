import React, { useEffect } from 'react'
import Message from './message.ts'
import CompA from './com-a.tsx'
import CompB from './com-b.tsx'


// const myEventTarget = new EventTarget()

// const CompA = () => {
//     const [conut, setCount] = React.useState(0)


//     // myEventTarget.addEventListener('AClick', () => {
//     //     setCount(conut + 1)
//     // })

//     Message.on('AClick', () => {
//         setCount(conut + 1)
//     })

//     return <div>
//         {conut}
//         <button onClick={() => {
//             setCount(conut + 1)
//         }}>A</button>
//         <button onClick={() => {
//             // myEventTarget.dispatchEvent(new CustomEvent('BClick'))
//             Message.emit('BClick')
//         }}>A - B</button>
//     </div>
// }

// const CompB = () => {
//     const [conut, setCount] = React.useState(0)

//     // myEventTarget.addEventListener('BClick', () => {
//     //     setCount(conut + 1)
//     // })

//     Message.on('BClick', () => {
//         setCount(conut + 1)
//     })

//     return <div>
//         {conut}
//         <button onClick={() => {
//             setCount(conut + 1)
//         }}>B</button>
//          <button onClick={() => {
//             // myEventTarget.dispatchEvent(new CustomEvent('AClick'))
//             Message.emit('AClick')
//         }}>B - A</button>
//     </div>
// }



export default function Index() {

    useEffect(() => {
        setInterval(() => {
            Message.emit('AClick')
            Message.emit('BClick')
        },2000)
    }, [])

  return (
    <div>
        <CompA/>
        <CompB/>
    </div>
  )
}
