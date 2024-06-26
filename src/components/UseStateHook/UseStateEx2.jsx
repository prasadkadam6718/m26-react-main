import React, { useState } from 'react'
const UseStateEx2 = () => {
  let [state, setState] = useState(10)
  console.log(setState)
  return (
    <div>
      <h1>count :{state} </h1>
      <button onClick={() => { setState(state + 1) }}>increment</button>
    </div>
  )
}
export default UseStateEx2