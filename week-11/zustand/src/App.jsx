import React from 'react'
import { useStore } from './store/store'
import { useEffect } from 'react'

function App() {
  return (
    <div>
      <Counter/>
      
    </div>
  )
}

function Counter() {
  const { count, inc , print} = useStore()
  useEffect(()=>{
    print()
  },[])
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default App
