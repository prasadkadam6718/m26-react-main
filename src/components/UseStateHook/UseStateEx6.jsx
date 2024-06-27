import React, { useState } from 'react'

const UseStateEx6 = () => {
  let [state, setState] = useState(null)
  return (
    <div>
      <p>value is :  {state == null ? "Loading..." : state}</p>
      <button onClick={() => { setState("value is updated") }}>update value</button>
    </div>
  )
}

export default UseStateEx6