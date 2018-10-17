import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from 'configureStore';
import CensusCotainer from 'containers/census/CensusContainer';


const createRoot = (store, {
  Census,
}) => (
  <Provider store={store}>
    <div className="App">
      <Census />
    </div>
  </Provider>

);


class App extends Component {
  render() {
    return (
      createRoot(configureStore(), { Census: CensusCotainer, })
    );
  }
}

export default App;
