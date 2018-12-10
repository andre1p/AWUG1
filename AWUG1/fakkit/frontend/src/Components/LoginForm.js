import React, { Component } from 'react';
import "./LoginForm.css";
import Context from '../Context';
import Axios from 'axios';

export default class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            status: "ok",
            username: "",
            password: "",
        };
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        /* Check if the password is correct... mmmm
        This is not the way to do this, we are checking the password in the client!! */
        Axios.get(`http://localhost:4000/users/${this.state.username}`)
            .then(response => {
                const userObj = response.data;
                if (userObj.password === this.state.password) {
                    this.context.doLogin(this.state.username);
                    this.props.history.replace("/");
                } else {
                    //TO DO: Show error
                    this.setState({ status: "login failed", password: ""});
                }
            })
            .catch(err => {
                //TO DO: Show error
                this.setState({ status: "login failed", password: ""});
            });
    }

    render() {
        let { username, password, status } = this.state;
        let errorMessage;
        if(status === "login failed"){
            errorMessage = <div className="error">Login failed</div>;
        } else {
            errorMessage = null;
        }
        return (
            <div className="login">
                {errorMessage}
                <form className="field" onSubmit={this.onSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.onChangeUsername} /><br />
                    <label>Password</label>
                    <input type="password" value={password} onChange={this.onChangePassword} /> <br />
                    <button className="buttons" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
LoginForm.contextType = Context;