import React from 'react'

const EventsEx5 = () => {
  let body = document.body
  return (
    <div className='flex justify-around'>
      <button className='border-1 border-black' onClick={(e) => { body.style.background = "red" }}>click</button>
      <button className='border-1 border-black' onClick={(e) => { body.style.background = "orange" }}>click</button>
      <button className='border-1 border-black' onClick={(e) => { body.style.background = "blue" }}>click</button>
      <button className='border-1 border-black' onClick={(e) => { body.style.background = "green" }}>click</button>
      <button className='border-1 border-black' onClick={(e) => { body.style.background = "yellow" }}>click</button>
    </div>
  )
}

export default EventsEx5