import React, { Component } from 'react'
import "./Link.css";
import Context from '../Context';

export default class Link extends Component {
    
    render() {
        let { link, index } = this.props;
        let upvote = null;
        if (this.context.user) {
            upvote = " up ";
        }
        return (
            <div className="link">
                <span className="index">{index}.</span>
                {upvote}
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
Link.contextType = Context;
