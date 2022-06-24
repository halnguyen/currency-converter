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
    // this.getRate = this.getRate.bind(this);
    this.handleChangeBaseSymbol = this.handleChangeBaseSymbol.bind(this);
    this.handleChangeTargetSymbol = this.handleChangeTargetSymbol.bind(this);
    this.handleChangeBaseInput = this.handleChangeBaseInput.bind(this);
    this.handleChangeTargetInput = this.handleChangeTargetInput.bind(this);

    this.state = {
      symbols: [],
      baseSymbol: "CAD",
      baseAmount: 0.00,
      targetSymbol: "USD",
      targetAmount: 0.00,
      rate: undefined,
      isDisabled: false // may not need it later 
    };
  }

  // Function

  getSymbols() {
    const allSymbols = [];
    GetAPI.getSymbols().then(symbols => {
      symbols.map( symbol => {
        allSymbols.push(symbol[1]);
      })
      this.setState( {symbols: allSymbols} );
    })
    .catch(error => console.log(error));
  }

  // getRate() {
  //   const baseSymbol = this.state.baseSymbol;
  //   const targetSymbol = this.state.targetSymbol;
  //   if (baseSymbol && targetSymbol) {
  //     GetAPI.getRate(baseSymbol, targetSymbol).then(rateResponse => {
  //       this.setState( {rate: rateResponse, isDisabled: false} );
  //     });
  //   } else {
  //     return;
  //   }
  // }

  // Handle events

  handleChangeBaseSymbol(event) {
    // Handle change in base symbol
    const newBase = event.target.value;
    const target = this.state.targetSymbol;
    GetAPI.getRate(newBase, target).then(response => {
      this.setState({
        baseSymbol: newBase,
        rate: response
      });
    });

  }

  handleChangeTargetSymbol(event) {
    // Handle change in target symbol
    const newTarget = event.target.value;
    const base = this.state.baseSymbol;
    GetAPI.getRate(base, newTarget).then(response => {
      this.setState({
        targetSymbol: newTarget,
        rate: response
      });
    });
  }

  handleChangeBaseInput(event) {
    let baseCurrency = Number(event.target.value);
    // Calculation
    let targetCurrency = baseCurrency * this.state.rate;
    this.setState( {baseAmount: baseCurrency, targetAmount: targetCurrency} );

  }

  handleChangeTargetInput(event) {
    let targetCurrency = Number(event.target.value);
    // Calculation
    let baseCurrency = targetCurrency / this.state.rate;
    this.setState( {baseAmount: baseCurrency, targetAmount: targetCurrency} );
  }

  // Life cycles

  componentDidMount() {
    this.getSymbols();
  }

  componentDidUpdate() {
    console.log(this.state.baseSymbol, this.state.targetSymbol, this.state.rate);
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <From
          isDisabled={this.state.isDisabled}
          onInput={this.handleChangeBaseInput}
          onChange={this.handleChangeBaseSymbol}
          baseAmount={this.state.baseAmount}
          baseSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
        <To
          isDisabled={this.state.isDisabled}
          onInput={this.handleChangeBaseInput}
          onInput={this.handleChangeTargetInput}
          onChange={this.handleChangeTargetSymbol}
          targetAmount={this.state.targetAmount}
          targetSymbol={this.state.targetSymbol}
          symbols={this.state.symbols} />
      </div>
    );
  }
}
