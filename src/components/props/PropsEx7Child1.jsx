import React from 'react'
import PropsEx7Child2 from './PropsEx7Child2';

const PropsEx7Child1 = (props) => {
  // console.log(props)
  return (
    <div>
      <PropsEx7Child2 props={props} />
    </div>
  )
}

export default PropsEx7Child1