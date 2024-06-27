import React, { useState } from 'react'

const UseStateExample5 = () => {
  let [state, setState] = useState(true)
  return (
    <div>
      <button onClick={() => { setState(!state) }} className='bg-slate-300 p-1'>{state ? "ONN" : "OFF"}</button>
    </div>
  )
}

export default UseStateExample5