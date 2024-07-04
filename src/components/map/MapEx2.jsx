import React, { useEffect, useState } from 'react'

const MapEx2 = () => {
  let [state, setState] = useState([])
  let fetching = async () => {
    let resp = await fetch(`https://api.github.com/users`)
    let data = await resp.json()
    setState(data)
  }
  useEffect(() => { fetching() }, [])
  return (
    <div>
      <div className='flex flex-wrap'>
        {
          state.length > 0 && state.map((val, i) => {
            return (
              <div key={i} className='p-[30px] border-[1px] border-gray-600 w-[265px]'>
                <img src={val.avatar_url} width="200px" alt="" />
                <p className='font-extrabold text-3xl' >{val.login}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MapEx2