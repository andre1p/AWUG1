import React, { Component } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import Context from '../Context';

export default class Header extends Component {

  onLogout = (e) => {
    e.preventDefault(); //prevent reload from <a> element
    this.context.doLogin(null);
  }

  render() {
    let loginLogout; 
    let newLink;

    if (this.context.user) {
      loginLogout = <a className="new" href="." onClick={this.onLogout}>Logout</a>
      newLink = <Link to="/new" className="new">New link</Link>
    } else {
      loginLogout = <Link to="/login" className="new"> Login </Link>
    }
    
    return (
      <div className="header">
        {newLink}
        <Link to="/" className="logo"> Fakkit </Link>
        {loginLogout}
        <span className="username">{this.context.user}</span>
      </div>
    )
  }
}
Header.contextType = Context;