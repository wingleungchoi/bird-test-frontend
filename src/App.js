import React, { Component } from 'react';

import './App.css';
import Dropdown from './components/basic/Dropdown';
import Result from './components/demographic/Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h5>Variables</h5>
        <Dropdown />
        <Result />
      </div>
    );
  }
}

export default App;
