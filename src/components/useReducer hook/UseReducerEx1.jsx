import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
  let initialState = { count: 0 }
  let reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "increment": return { count: state.count + 1 }; break;
      case "decrement": return { count: state.count - 1 }; break;
      case "reset": return { count: initialState.count }; break;
      default:
        console.warn("wrong dispatch")
        return { count: state.count };
    }
  }
  let [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>count : {state.count}</h1>
      <button onClick={() => { dispatch({ type: "increment" }) }}>increment</button> <br />
      <button onClick={() => { dispatch({ type: "decrement" }) }}>decrement</button> <br />
      <button onClick={() => { dispatch({ type: "reset" }) }}>reset</button>
    </div>
  )
}

export default UseReducerEx1