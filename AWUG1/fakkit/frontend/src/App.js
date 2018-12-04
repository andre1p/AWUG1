import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import LinkList from "./Components/LinkList";
import NewLink from "./Components/NewLink"
import './App.css';
import Context from './Context';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      doLogin: this.doLogin,
    }
  }

  doLogin = (user) => {
    this.setState({ user }); //same as user: user
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" exact
              component={LinkList} />
            <Route path="/new"
              component={NewLink} />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
export default App;
