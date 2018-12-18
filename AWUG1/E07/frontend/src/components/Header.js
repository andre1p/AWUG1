import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Image" src="flappy.png" alt=""></img>
                <p className="tittle">Flappy</p>
                <p className="connected">Connected</p>
            </div>
        )
    }
}
