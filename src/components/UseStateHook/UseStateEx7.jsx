import React, { useState } from 'react'

const UseStateEx7 = () => {
  let [state, setState] = useState(() => { console.log("function executed") })

  let func = () => {
    console.log("func executed")
  }
  func()
  return (
    <div>
      <button onClick={() => { state() }}>click</button>
    </div>
  )
}

export default UseStateEx7