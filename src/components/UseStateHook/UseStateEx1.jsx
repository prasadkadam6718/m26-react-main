import React from 'react'

const UseStateEx1 = () => {
  let count = 0
  return (
    <div>
      <button className='border-[1px] border-black' onClick={() => {
        console.log("incrementing the count")
        count++
        console.log(count)
      }}>Increment</button>
    </div>
  )
}

export default UseStateEx1