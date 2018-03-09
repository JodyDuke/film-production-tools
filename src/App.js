import React, { Component } from 'react';
import Menu from './components/menu/menu.js';
import Main from './components/main/main.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
