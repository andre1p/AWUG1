import React, { Component } from 'react'
import "./Link.css"

export default class Link extends Component {
    render() {
        let { link, index } = this.props;
        return (
            <div className="link">
                <span className="index">{index}.</span>
                <div className="content">
                    <a href={link.url}>{link.title}</a>
                    <div className="info">
                        {link.score} points by {link.author} in {link.date} at {link.time}
                    </div>
                </div>
            </div>
        )
    }
}
