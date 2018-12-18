import React, { Component } from 'react';
import Chat from "./components/Chat";
import './components/style.css';
import Header from "./components/Header"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chat />
      </div>
    );
  }
}

export default App;
