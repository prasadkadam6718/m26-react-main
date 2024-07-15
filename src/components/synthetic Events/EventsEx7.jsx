import React, { useState } from 'react'

const EventsEx7 = () => {
  const [username, setusername] = useState()
  const [password, setpassword] = useState()
  let handleUsername = (e) => {
    setusername(e.target.value)
  }
  let handlePassword = (e) => {
    setpassword(e.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action="">
        <input type="text" placeholder='username' onChange={handleUsername} className='border-[1px] border-black' />
        <input type="text" placeholder='password' onChange={handlePassword} className='border-[1px] border-black' />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>username : {username}</p>
      <p>password : {password}</p>
    </div>
  )
}

export default EventsEx7