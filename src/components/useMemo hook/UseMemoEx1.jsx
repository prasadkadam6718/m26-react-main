import React, { useMemo, useState } from 'react'

const UseMemoEx1 = () => {
  let [count1, setCount1] = useState(0)
  let [count2, setCount2] = useState(0)
  // let checkCount1 = () => {
  //   let i = 0
  //   while (i < 1000000000) {
  //     i++
  //   }
  //   count1 % 2 == 0 ? "Even" : "Odd"
  // }

  let memoizedVal = useMemo(() => {
    let i = 0
    while (i < 1000000000) {
      i++
    }
    let rv = count1 % 2 == 0 ? "Even" : "Odd"
    return rv
    s
  }, [count1])
  let checkCount2 = () => {
    let rv = count2 % 2 == 0 ? "Even" : "Odd"
    return rv
  }
  return (
    <div>
      <div>
        <button onClick={() => { setCount1(count1 + 1) }}>count1 : {count1} {memoizedVal}</button>
      </div>
      <div>
        <button onClick={() => { setCount2(count2 + 1) }}>count2 : {count2} {checkCount2()}</button>
      </div>
    </div>
  )
}

export default UseMemoEx1