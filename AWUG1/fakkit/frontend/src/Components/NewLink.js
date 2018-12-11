import React, { Component } from 'react';
import "./NewLink.css";
import Axios from 'axios';
import Context from '../Context';

const Field = (props) =>
    <div className="field">
        <span className="label">{props.label}</span>
        <input type="text" value={props.value} onChange={props.onChange} />
    </div>

export default class NewLink extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            URL: "",
        }
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onChangeURL = (e) => {
        this.setState({
            URL: e.target.value
        })
    }

    onChange = (field) => (e) => {
        this.setState({ [field]: e.target.value })
    } //Combined version of two above

    onSubmit = (e) => {
        e.preventDefault(); //Prevent the form from loading a new page
        let date = new Date();
        Axios.post("http://localhost:4000/links", {
            title: this.state.title,
            url: this.state.URL,
            author: this.context.user,
            date: date,
        }).then(response => {
            // Change the page to the root page _without_ keeping the current page in the history
            this.props.history.replace("/");
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        let { title, URL } = this.state;
        return (
            <div className="new-link">
                <form onSubmit={this.onSubmit}>
                    <Field label="Title" value={title} onChange={this.onChange('title')} />
                    <Field label="URL" value={URL} onChange={this.onChange('URL')} />
                    <input type="submit" value="Add link" className="buttons"></input>
                </form>
            </div>
        )
    }
}
NewLink.contextType = Context;