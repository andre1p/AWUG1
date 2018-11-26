import React, { Component } from 'react'
import './Number.css'

export default class Number extends Component {
    render() {
        let { value, click } = this.props;
        return (
            <div onClick={click} className="number">
                {value}
            </div>
        )
    }
}
