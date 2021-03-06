import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/clock.js';
import Event from './event/envent.js';
import IsLoggedIn from './isLoggedIn/isLoggedIn.js'
import Temperature from './temperature/temperature.js';
import FilterableProductTable from './productTable/filterableProductTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Clock />
        <Event />
        <IsLoggedIn />
        <Temperature />
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
