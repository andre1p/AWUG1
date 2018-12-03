import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import LinkList from "./Components/LinkList";
import NewLink from "./Components/NewLink"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact
            component={LinkList} />
          <Route path="/new"
            component={NewLink} />
        </div>
      </Router>
    );
  }
}
export default App;
