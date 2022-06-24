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
    })
  }

  handleChangeBaseSymbol(event) {
    // Handle change in base symbol
    const code = event.target.value;
    this.setState({baseSymbol: code});
  }

  handleChangeTargetSymbol(event) {
    // Handle change in target symbol
    const code = event.target.value;
    this.setState( {targetSymbol: code} );
  }

  handleChangeBaseInput(event) {
    this.setState({baseAmount: Number(event.target.value)});
  }

  handleChangeTargetInput(event) {
    this.setState({targetAmount: Number(event.target.value)});
  }

  componentDidMount() {
    this.getSymbols();
  }

  componentDidUpdate() {
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <From
          onInput={this.handleChangeBaseInput}
          onChange={this.handleChangeBaseSymbol}
          baseAmount={this.state.baseAmount}
          baseSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
        <To
          onInput={this.handleChangeTargetInput}
          onChange={this.handleChangeTargetSymbol}
          targetAmount={this.state.targetAmount}
          targetSymbol={this.state.targetSymbol}
          symbols={this.state.symbols} />
      </div>
    );
  }
}
