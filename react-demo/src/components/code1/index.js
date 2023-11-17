import React, { useState } from 'react'
import './index.scss'

export default function Index() {
  const [active, setActive] = useState(0)
  const imgs = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  ]
  const clickImg = (index) => {
    setActive(index)
  }
  return (
    <div className='container'>
      {imgs.map((item, index) => {
        return (
          <div
            key={index}
            className={`item ${index === active ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item})` }}
            onClick={() => { clickImg(index) }}
          ></div>
        )
      })}
    </div>
  )
}
