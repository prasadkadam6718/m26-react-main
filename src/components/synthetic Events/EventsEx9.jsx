import React, { useState } from 'react'
const EventsEx9 = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now(),
    list: []
  })
  let { username, password, id, list } = state
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    let newObj = { username, password, id }
    setState({
      username: "",
      password: "",
      id: Date.now(),
      list: [...list, newObj]
    })
  }
  return (
    <div>
      <form action="">
        <input type="text" name='username' value={username} onChange={handleChange} placeholder='username' className='border-[1px] border-black' />
        <input type="text" name='password' value={password} onChange={handleChange} placeholder='password' className='border-[1px] border-black' />
        <button onClick={handleSubmit} className='border-[1px] border-black'>Submit</button>
      </form>
      <div className='flex flex-wrap'>
        {
          state.list.length > 0 && state.list.map((val, i) => {
            return (
              <div key={i} className='w-[200px] p-3 border-[1px] border-black'>
                <p>username : {val.username}</p>
                <p>password : {val.password}</p>
                <p>id : {val.id}</p>
                <button className='border-[1px] border-black m-2 px-2'>Delete</button>
                <button className='border-[1px] border-black m-2 px-2'>Update</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default EventsEx9