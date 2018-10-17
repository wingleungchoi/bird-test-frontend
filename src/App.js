import React, { Component } from 'react';

import './App.css';
import Dropdown from './components/basic/Dropdown';

class App extends Component {
  render() {
    return (
      <div>
        Variables
        <Dropdown />
      </div>
    );
  }
}

export default App;
