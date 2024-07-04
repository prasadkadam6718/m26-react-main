import React, { useContext } from 'react'
import { context } from './MyContext'

const RandomComponent = () => {
  let data = useContext(context)
  console.log(data)
  return (
    <div>RandomComponent</div>
  )
}

export default RandomComponent