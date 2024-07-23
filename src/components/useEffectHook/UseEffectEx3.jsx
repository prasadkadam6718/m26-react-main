import React, { useEffect, useState } from 'react'

const UseEffectEx3 = () => {
  const [count, setcount] = useState(0)
  const [count1, setcount1] = useState(0)
  useEffect(() => {
    console.log("component mounted")
  }, [count1, count])
  return (
    <div>
      <span>count : {count}</span> &nbsp; &nbsp;
      <span>count1 : {count1}</span>
      <button className='border-[1px] border-black' onClick={() => { setcount(count + 1) }}>increment</button>
      <button className='border-[1px] border-black' onClick={() => { setcount1(count1 + 1) }}>increment1</button>
    </div>
  )
}

export default UseEffectEx3