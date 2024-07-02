import React from 'react'

const PropsEx3Child = (props) => {
  let state = props.props.state
  let setState = props.props.setState
  let name = "tinku"
  return (
    <div>
      <button onClick={() => {
        setState(state + 1)
      }}>Increment</button>
    </div>
  )
}
export default PropsEx3Child