import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectEx6 = () => {
  let [state, setState] = useState(0)
  let [cartItem, setcartItem] = useState(0)
  let [products, setProducts] = useState([])
  let [show, setShow] = useState(false)
  // fetching api using fetch method with useEffech hook
  // useEffect(() => {
  //   let fetching = async () => {
  //     let resp = await fetch("https://fakestoreapi.com/products/")
  //     let data = await resp.json()
  //     console.log(data);
  //   }
  //   fetching()
  // }, [cartItem])



  // fetching api using axios with useEffech hook


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((resp) => {
      setProducts(resp.data)
    })
  }, [])

  return (
    <div>
      <p onClick={() => { setState(state + 1) }}>count : {state}</p>
      <p onClick={() => { setcartItem(cartItem + 1) }}>cartItem : {cartItem}</p>
      <div className='flex flex-wrap m-6'>
        {
          products.length > 0 && products.map((val, i) => {
            console.log(val);
            let desc = val.description
            console.log(desc);
            return (
              <div key={i} className='m-5'>
                <main className='w-[20vw] h-[60vh]  border-[1px] border-black p-4'>
                  <p className='text-center'>{val.category}</p>
                  <div className='h-[35%] w-[100%] flex justify-center'>
                    <img src={val.image} className='h-[100%]' alt="" />
                  </div>
                  <p>{val.title}</p>
                  {/* <p>{val.price < 50 ? val.price : val.price > 50 && val.price < 100 ? <del className='line-through'>{val.price + 10} && </del> + val.price : val.price}</p> */}

                  <p>price : {val.price}</p>
                  <p className='flex justify-between'><span>{val.rating.rate}/5</span> <span>total : {val.rating.count}</span>  </p>
                  {/* <p>{show ? desc : desc.slice(0, 80)}<span onClick={() => { setShow(!show) }}>...</span> </p> */}
                  <p>{desc.slice(0, 80)}</p>
                  <button className='border-[1px] border-black w-[100%]'>add to cart</button>
                  <button className='border-[1px] border-black w-[100%]'>remove</button>
                </main>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UseEffectEx6