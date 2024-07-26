import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-[15vh] bg-slate-600 text-white flex justify-around items-center'>
      <div>Logo</div>
      <div> <Link to="/home">Home</Link></div>
      <div> <Link to="/about">About</Link></div>
      <div> <Link to="/contact">Contact</Link></div>
    </div>
  )
}

export default Navbar