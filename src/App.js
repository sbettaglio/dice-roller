import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

export class App extends Component {
  state = {
    dice6: Math.ceil(Math.random() * 6),
    dice20: Math.ceil(Math.random() * 20),
    dice12: Math.ceil(Math.random() * 12),
    dice8: Math.ceil(Math.random() * 8),
    dice4: Math.ceil(Math.random() * 4),
    dice100: Math.ceil(Math.random() * 100),
  }
  rollDice6 = () => {
    this.setState({
      dice6: Math.ceil(Math.random() * 6),
    })
  }
  rollDice20 = () => {
    this.setState({
      dice20: Math.ceil(Math.random() * 20),
    })
  }
  rollDice12 = () => {
    this.setState({
      dice12: Math.ceil(Math.random() * 12),
    })
  }
  rollDice8 = () => {
    this.setState({
      dice8: Math.ceil(Math.random() * 8),
    })
  }
  rollDice4 = () => {
    this.setState({
      dice4: Math.ceil(Math.random() * 4),
    })
  }
  rollDice100 = () => {
    this.setState({
      dice100: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    return (
      <>
        <section>
          <h3>6 Sided Dice</h3>
          <p>{this.state.dice6}</p>
          <button onClick={this.rollDice6}>Roll Dice</button>
        </section>
        <section>
          <h3>20 Sided Dice</h3>
          <p>{this.state.dice20}</p>
          <button onClick={this.rollDice20}>Roll Dice</button>
        </section>
        <section>
          <h3>12 Sided Dice</h3>
          <p>{this.state.dice12}</p>
          <button onClick={this.rollDice12}>Roll Dice</button>
        </section>
        <section>
          <h3>8 Sided Dice</h3>
          <p>{this.state.dice8}</p>
          <button onClick={this.rollDice8}>Roll Dice</button>
        </section>
        <section>
          <h3>4 Sided Dice</h3>
          <p>{this.state.dice4}</p>
          <button onClick={this.rollDice4}>Roll Dice</button>
        </section>
        <section>
          <h3>100 Sided Dice</h3>
          <p>{this.state.dice100}</p>
          <button onClick={this.rollDice100}>Roll Dice</button>
        </section>
      </>
    )
  }
}
export default App
