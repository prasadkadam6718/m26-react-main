import React, { useState } from 'react'

const UseStateEx3 = () => {
  let [state, setState] = useState("Hiee")
  let handleClick = () => {
    setState("Byeee")
  }
  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick} className='border-[1px] border-black p-1'>say bye</button>
    </div>
  )
}

export default UseStateEx3