import React from 'react'
import PropsEx1Child from './PropsEx1Child'

const PropsEx1 = () => {
  let func = () => {
    console.log("func executed")
  }
  let a = 10
  let obj = { func, a }
  return (
    <div>
      <PropsEx1Child func={obj} />
    </div>
  )
}

export default PropsEx1