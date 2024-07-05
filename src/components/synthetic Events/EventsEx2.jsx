import React from 'react'

const EventsEx2 = () => {
  let handleClick = (e) => {
    // console.log(e)
    e.target.style.border = "1px solid black"
    e.target.style.background = "red"
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default EventsEx2