import { Component } from 'react';
import './App.css';
import CurrencyInput from '../CurrencyInput/currencyInput.jsx';

export default class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      from: "",
      to: "",
      rate: undefined
    };

  }


  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <CurrencyInput />
        <hr className="separator" />
        
        
      </div>
    );
  }
}
