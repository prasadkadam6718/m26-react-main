import React from 'react'

const JsxExpression = () => {
  let arr = [10, 20, 30, 40, 50]
  return (
    <div>
      {
        arr.map((val, i) => {
          console.log(val)
        })
      }
    </div>
  )
}

export default JsxExpression