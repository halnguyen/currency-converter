import { Component } from 'react';
import './App.css';
import CurrencyInput from '../CurrencyInput/currencyInput.jsx';

export default class App extends Component {

  constructor(props) { 
    super(props);

  }


  render() {
    return (
      <div className="App">
        <CurrencyInput />
      </div>
    );
  }
}
