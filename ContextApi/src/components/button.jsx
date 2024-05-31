import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/counter'
export default function button() {
    const counter = useContext(counterContext)
  return (
    <div>
      <button
      onClick={() => counter.setCount((count) => count + 1)}
      >count{counter.count}</button>
    </div>
  )
}
