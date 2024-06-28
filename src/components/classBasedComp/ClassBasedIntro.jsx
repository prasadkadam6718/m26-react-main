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
      <div className='w-[100vw] h-[100vh] bg-slate-300 flex flex-col justify-center items-center'>
        <p>ClassBasedIntro</p>
        <p className='text-red-500 text-4xl p-3'>count : {this.state.count}</p>
        <button className='px-8 p-1 bg-green-400 rounded-full' onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>increment</button> <br />

        <button className='px-8 p-1 bg-red-400 rounded-full' onClick={() => {
          this.setState({ count: this.state.count - 1 })
        }}>decrement</button> <br />

        <button className='px-8 p-1 bg-blue-400 rounded-full' onClick={() => { this.setState({ count: 0 }) }}>reset</button>
      </div>
    )
  }
}
