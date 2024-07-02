import React, { useState } from 'react'
import PropsEx2Child from './PropsEx2Child'

const PropsEx2 = () => {
  let [state, setState] = useState(0)

  return (
    <div>
      <PropsEx2Child props={{ state, setState, incrementFunc }} />
    </div>
  )
}

export default PropsEx2