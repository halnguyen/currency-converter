import { Component } from 'react';
import './App.css';
import From from '../Input/From.jsx';
import SwapButton from '../SwapButton/SwapButton.jsx';
import To from '../Input/To.jsx';
import GetAPI from '../../util/api.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.getSymbols = this.getSymbols.bind(this);
    this.getSymbols()
    this.state = {
      symbols: [],
      baseSymbol: "",
      baseAmount: 0.00,
      toSymbol: "",
      toAmount: 0.00,
      rate: undefined
    };
  }

  getSymbols() {
  }

  handleChange(event) {
    return;
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <From
          baseAmount={this.state.baseAmount}
          baseSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
        <To
          toAmount={this.state.toAmount}
          toSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
      </div>
    );
  }
}
