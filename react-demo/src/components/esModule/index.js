import { v } from './moduleA.js';
import React from 'react'

export default function Index() {

    setInterval(() => {
        console.log(v);
    }, 1000);

  return (
    <div>I</div>
  )
}
