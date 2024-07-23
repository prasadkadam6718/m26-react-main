import React from 'react'
import UseEffectEx1 from './UseEffectEx1'
import UseEffectEx2 from './UseEffectEx2'
import UseEffectEx3 from './UseEffectEx3'
// import UseEffectEx4 from './UseEffectEx4'
import { RouterProvider } from 'react-router-dom'
import { router } from './UseEffectRoutes'
import UseEffectEx6 from './UseEffectEx6'



const UseEffectInto = () => {
  return (
    <div>
      {/* <UseEffectEx1 /> */}
      {/* <UseEffectEx2 /> */}
      {/* <UseEffectEx3 /> */}
      {/* <UseEffectEx4 /> */}
      {/* <RouterProvider router={router}>
      </RouterProvider> */}
      <UseEffectEx6 />
    </div>
  )
}

export default UseEffectInto