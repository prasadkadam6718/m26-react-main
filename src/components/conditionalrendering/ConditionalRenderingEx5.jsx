import React, { useState } from 'react'

const ConditionalRenderingEx5 = () => {
  let [delay, setDelay] = useState(false)
  let names = ["Abhishek", "Melodi", "Tinku"]
  setTimeout(() => {
    setDelay(true)
  }, 3000)
  return (
    <div>
      {delay || "Loading..."}
      <div>
        {
          delay && names.map((val, i) => {
            return (
              <div>
                <p>{val}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ConditionalRenderingEx5