import React, { useEffect, useState } from 'react'

const UseEffectEx2 = () => {
  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log("component mounted")
  }, [])
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => { setcount(count + 1) }}>increment</button>
    </div>
  )
}

export default UseEffectEx2