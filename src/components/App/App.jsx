import { Component } from 'react';
import './App.css';
import From from '../Input/From.jsx';
import SwapButton from '../SwapButton/SwapButton.jsx';
import To from '../Input/To.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fromSymbol: "",
      fromAmount: 0.00,
      toSymbol: "",
      toAmount: 0.00,
      rate: undefined
    };

  }

  handleChange(event) {
    return;
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <From />
        <SwapButton />
        <To />
      </div>
    );
  }
}
