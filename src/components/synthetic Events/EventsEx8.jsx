import React, { useState } from 'react'

const EventsEx8 = () => {
  let [state, setState] = useState({ username: "", password: "" })
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action="">
        <input onChange={handleChange} type="text" placeholder='username' className='border-[1px] border-black' name='username' />
        <input onChange={handleChange} type="text" placeholder='password' className='border-[1px] border-black' name='password' />
        <button onClick={handleSubmit} className='border-[1px] border-black'>Submit</button>
      </form>
      <div>
        <p>username : {state.username}</p>
        <p>password : {state.password}</p>
      </div>
    </div>
  )
}

export default EventsEx8