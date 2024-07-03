import React from 'react'

const ConditionalRenderingEx4 = () => {

  let names = ["Abhishek", "Melodi", "Tinku"]
  return (
    <div>
      {
        names.length > 0 && names.map((val, i) => {
          return (
            <div>
              <p>{val}</p>
            </div>
          )
        })
      }
    </div>
  )

}

export default ConditionalRenderingEx4