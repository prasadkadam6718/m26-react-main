import React from 'react'

const PropsEx6Child = (props) => {
  console.log(props.children.props.children)
  return (
    <div>PropsEx6Child</div>
  )
}

export default PropsEx6Child