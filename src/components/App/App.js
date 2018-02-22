import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../containers/CardContainer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header"> POKéDEX </h1>
        </header>
        <CardContainer />
      </div>
    );
  }
}

export default App;
