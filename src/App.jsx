import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>Hello React!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
