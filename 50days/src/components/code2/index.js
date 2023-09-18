import React from 'react'
import './index.scss'

export default function Index() {
    const items = ['1', '2', '3', '4']
  return (
    <div>
        <div className='items'>
            {items.map(item =>{
                return <div key={item} className='item'>{item}</div>
            })}
        </div>
        <div>
            <button>prev</button>
            <button>next</button>
        </div>
    </div>
  )
}
