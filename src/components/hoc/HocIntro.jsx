import React from 'react'
import Hoc from './Hoc'
import User from './User'

const HocIntro = () => {
  let UserWithLoader = Hoc(User)
  return (
    <div>
      <UserWithLoader />
    </div>
  )
}

export default HocIntro