import React, { Fragment } from 'react'

const MapEx1 = () => {
  let names = ["Abhishek", "Melodi", "Tinku", "Pinku", "Rinku"]
  return (
    <div>
      <div>
        {
          names.length > 0 && names.map((val, i) => {
            return (
              <Fragment key={i}>
                <p>{val}</p>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default MapEx1