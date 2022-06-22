import { Component } from 'react';
import './App.css';
import UserInput from '../UserInput/userInput.jsx';

export default class App extends Component {

  constructor(props) { 
    super(props);

  }


  render() {
    return (
      <div className="App">
        <UserInput />
      </div>
    );
  }
}
