import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Website = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Website