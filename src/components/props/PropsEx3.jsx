//! achieve bidirectional data flow in react 
import React, { useState } from 'react'
import PropsEx3Child from './PropsEx3Child'

const PropsEx3 = () => {
  let [state, setState] = useState(0)
  return (
    <div>
      <h1>count : {state}</h1>
      <PropsEx3Child props={{ state, setState }} />
    </div>
  )
}
export default PropsEx3