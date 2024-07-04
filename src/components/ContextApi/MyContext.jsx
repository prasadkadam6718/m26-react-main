import React, { createContext, useEffect, useState } from 'react'
export let context = createContext()
const MyContext = (props) => {
  let [state, setState] = useState([])
  let fetching = async () => {
    let resp = await fetch(`https://api.github.com/users`)
    let data = await resp.json()
    setState(data)
  }
  useEffect(() => { fetching() }, [])

  return (
    <context.Provider value={state}>{props.children}</context.Provider>
  )
}

export default MyContext