import React, { Component } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import Context from '../Context';

export default class Header extends Component {

  onLoginLogout = (e) => {
    e.preventDefault(); //prevent reload from <a> element
    if (this.context.user) {
      this.context.doLogin(null);
    } else {
      this.context.doLogin("Andre1");
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/new" className="new">New link</Link>
        <Link to="/" className="logo"> Fakkit </Link>
        <a href="." onClick={this.onLoginLogout} className="new">{this.context.user ? "Logout" : "Login"}</a>
        <span className="username">{this.context.user}</span>
      </div>
    )
  }
}
Header.contextType = Context;