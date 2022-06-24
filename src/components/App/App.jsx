import { Component } from 'react';
import './App.css';
import BaseCurrency from '../Input/BaseCurrency.jsx';
import TargetCurrency from '../Input/TargetCurrency.jsx';
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
      isDisabled: false 
    };
  }

  // Function

  getSymbols() {
    const allSymbols = [];
    GetAPI.getSymbols().then(symbols => {
      for (let symbol of symbols) {
        allSymbols.push(symbol);
      }
      this.setState( {symbols: allSymbols} );
    })
    .catch(error => console.log(error));
  }

  // Handle events

  handleChangeBaseSymbol(event) {
    // Handle change in base symbol
    // Disabling input while api is being fetched
    this.setState({isDisabled: true});
    const newBase = event.target.value;
    const target = this.state.targetSymbol;
    GetAPI.getRate(newBase, target).then(response => {
      this.setState({
        baseSymbol: newBase,
        targetAmount: this.state.baseAmount * response,
        rate: response,
        isDisabled: false
      });
    });

  }

  handleChangeTargetSymbol(event) {
    // Handle change in target symbol
    // Disabling input while api is being fetched
    this.setState({isDisabled: true});
    const newTarget = event.target.value;
    const base = this.state.baseSymbol;
    GetAPI.getRate(base, newTarget).then(response => {
      this.setState({
        targetSymbol: newTarget,
        baseAmount: this.state.targetAmount / response,
        rate: response,
        isDisabled: false
      });
    });
  }

  handleChangeBaseInput(event) {
    let baseCurrency = Number(event.target.value);
    // Calculation
    let targetCurrency = baseCurrency * this.state.rate;
    // Display 2 decimal places if the calculated value is greater than 0.009
    if (targetCurrency > 0.009) {
      targetCurrency = targetCurrency.toFixed(2);
    }
    this.setState( {baseAmount: baseCurrency, targetAmount: targetCurrency} );

  }

  handleChangeTargetInput(event) {
    let targetCurrency = Number(event.target.value);
    // Calculation
    let baseCurrency = targetCurrency / this.state.rate;
    // Display 2 decimal places if the calculated value is greater than 0.009
    if (baseCurrency > 0.009 ) {
      baseCurrency = baseCurrency.toFixed(2);
    }
    this.setState( {baseAmount: baseCurrency, targetAmount: targetCurrency} );
  }

  // Life cycles

  componentDidMount() {
    this.getSymbols();
    this.setState(
      {
        baseSymbol: "CAD",
        targetSymbol: "USD"
      }
    );
    GetAPI.getRate(this.state.baseSymbol, this.state.targetSymbol)
      .then(response => {
      this.setState({rate: response});
    })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    // debuggin
    console.log(this.state.baseSymbol, this.state.targetSymbol, this.state.rate);
  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <BaseCurrency
          isDisabled={this.state.isDisabled}
          onInput={this.handleChangeBaseInput}
          onChange={this.handleChangeBaseSymbol}
          baseAmount={this.state.baseAmount}
          baseSymbol={this.state.baseSymbol}
          symbols={this.state.symbols} />
        <TargetCurrency
          isDisabled={this.state.isDisabled}
          onInput={this.handleChangeTargetInput}
          onChange={this.handleChangeTargetSymbol}
          targetAmount={this.state.targetAmount}
          targetSymbol={this.state.targetSymbol}
          symbols={this.state.symbols} />
      </div>
    );
  }
}
