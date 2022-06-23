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
    this.getRate = this.getRate.bind(this);
    this.handleChangeBase = this.handleChangeBase.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.state = {
      symbols: [],
      baseSymbol: "",
      baseAmount: 0.00,
      targetSymbol: "",
      targetAmount: 0.00,
      rate: undefined
    };
  }

  getSymbols() {
    const allSymbols = [];
    GetAPI.getSymbols().then(symbols => {
      symbols.map( symbol => {
        allSymbols.push(symbol[1]);
      });
      this.setState( {symbols: allSymbols} );
    });
  }

  getRate(baseSymbol, targetSymbol) {
    GetAPI.getRate(baseSymbol, targetSymbol).then(rateResponse => {
      this.setState( {rate: rateResponse} );
      console.log(this.state.rate);
    })
  }

  handleChangeBase(event) {
    const code = event.target.value;
    this.setState( {baseSymbol: code} );
    console.log(this.state.baseSymbol);
  }

  handleChangeTarget(event) {
    const code = event.target.value;
    this.setState( {targetSymbol: code} );
    console.log(this.state.targetSymbol);
  }

  componentDidMount() {
    this.getSymbols();
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <From
          onChange={this.handleChangeBase}
          baseAmount={this.state.baseAmount}
          baseSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
        <To
          onChange={this.handleChangeTarget}
          toAmount={this.state.toAmount}
          toSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
      </div>
    );
  }
}
