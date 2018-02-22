import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../containers/CardContainer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header"> POKéDEX </h1>
        <CardContainer />
      </div>
    );
  }
}

export default App;
