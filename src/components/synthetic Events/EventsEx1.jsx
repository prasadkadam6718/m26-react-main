import React from 'react'

const EventsEx1 = () => {
  let func = (a) => {
    console.log("button clicked", a)
  }
  return (
    <div>
      <button onClick={() => { func(10) }}>click</button>
    </div>
  )
}

export default EventsEx1