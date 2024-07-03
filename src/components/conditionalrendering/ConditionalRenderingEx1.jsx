import React, { useState } from 'react'

//! conditional rendering using ternary operator
const ConditionalRenderingEx1 = () => {
  // let value = false
  let [value, setValue] = useState(true)
  let handleClick = () => {
    setValue(!value)
  }
  return (
    <div>
      <h1 onClick={handleClick}>{value == true ? "Logout" : "Login"}</h1>
    </div>
  )
}
export default ConditionalRenderingEx1