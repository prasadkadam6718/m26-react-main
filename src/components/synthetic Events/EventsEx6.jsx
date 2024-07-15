import React, { useState } from 'react'

const EventsEx6 = () => {
  let [state, setState] = useState()
  let handleChange = (e) => {
    console.log(e.target.value)
    setState(e.target.value)
  }
  return (
    <div>
      <input onChange={handleChange} className='border-[1px] border-black' type="text" />
      <button className='border-[1px] border-black px-2'>Submit</button>
      <h1>{state}</h1>
    </div>
  )
}

export default EventsEx6