import React, { Component } from 'react';
import Header from "./Components/Header";
import LinkList from "./Components/LinkList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <LinkList />
      </div>
    );
  }
}

export default App;
