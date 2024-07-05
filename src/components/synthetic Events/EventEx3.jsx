import React from 'react'

const EventEx3 = () => {
  let handleKeyDown = (e) => {
    console.log("key pressed")
  }
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}

export default EventEx3