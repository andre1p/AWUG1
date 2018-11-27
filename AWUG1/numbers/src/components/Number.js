import React, { Component } from 'react'
import './Number.css'

export default class Number extends Component {
    render() {
        let { value, click, selected } = this.props;
        let classes = ["number"];
        if (selected) {
            classes.push("selected");
        }
        return (
            <div onClick={click} className={classes.join(" ")}>
                {value}
            </div>
        )
    }
}
