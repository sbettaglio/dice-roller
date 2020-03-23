import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

export class App extends Component {
  state = {
    dice: Math.round(Math.random() * 6),
  }
  rollDice = () => {
    this.setState({
      dice: Math.ceil(Math.random() * 6),
    })
  }

  render() {
    return (
      <>
        <p>{this.state.dice}</p>
        <button onClick={this.rollDice}>Roll Dice</button>
      </>
    )
  }
}
export default App
