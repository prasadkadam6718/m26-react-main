import React, { useRef } from 'react'

const EventsEx11 = () => {
  let sectionRef = useRef()
  let section2Ref = useRef()
  let handleClick = () => {
    console.log(sectionRef)
    sectionRef.current.style.background = "red"
  }
  return (
    <div>
      <div className='w-[100px] h-[100px] border-[1px] border-black' onClick={handleClick}></div>
      <section onClick={() => { section2Ref.current.style.display = "block" }} ref={sectionRef} className='w-[100px] h-[100px] border-[1px] border-black'></section>
      <section ref={section2Ref} className='w-[100px] h-[100px] border-[1px] border-black hidden'></section>

    </div>
  )
}

export default EventsEx11