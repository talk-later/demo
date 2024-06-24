import React, { useEffect } from 'react';
import Index from './components/virtual-list/index.tsx'
import './index.scss'

export default function App() {

 useEffect(() => {
  const step = (time) => {
    console.log('step', time)
    requestAnimationFrame(step)
  }
  // requestAnimationFrame(step)
 }, [])

  return (
    <>
      <Index/>
    </>
  )
}
