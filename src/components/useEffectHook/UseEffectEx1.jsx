import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {
  const [cartItem, setcartItem] = useState(1)
  const [total, setTotal] = useState(100)
  useEffect(() => {
    setTotal(total + 200)
  }, [cartItem])
  return (
    <div>
      <h1>count : {cartItem}</h1>
      <button onClick={() => { setcartItem(cartItem + 1) }}>increment</button>

      <p>total price : {total}</p>
    </div>
  )
}

export default UseEffectEx1