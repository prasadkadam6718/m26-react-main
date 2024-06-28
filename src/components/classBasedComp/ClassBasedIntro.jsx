import React, { Component } from 'react'

export default class ClassBasedIntro extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <p>ClassBasedIntro</p>
        <p>count : {this.state.count}</p>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>increment</button> <br />

        <button onClick={() => {
          this.setState({ count: this.state.count - 1 })
        }}>decrement</button> <br />

        <button onClick={() => { this.setState({ count: 0 }) }}>reset</button>
      </div>
    )
  }
}
