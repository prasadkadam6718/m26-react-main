import React, { useState } from 'react'

const Hoc = (WrappedComp) => {
  let [state, setState] = useState(false)
  return () => {
    let myTimeOut = setTimeout(() => {
      setState(true)
    }, 3000)
    return (
      <div>
        {state ? <WrappedComp /> : "loading..."}
      </div>
    )
  }
}

export default Hoc