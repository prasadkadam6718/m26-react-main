import React from 'react'

const PropsEx5Child = ({ bike = "Splendor" }) => {
  console.log(bike)
  return (
    <div>PropsEx5Child</div>
  )
}

export default PropsEx5Child