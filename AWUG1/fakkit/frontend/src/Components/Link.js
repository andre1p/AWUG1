import React, { Component } from 'react'
import "./Link.css";
import Context from '../Context';
import Axios from 'axios';

export default class Link extends Component {

    onUpvote = (e) => {
        Axios.post("http://localhost:4000/votes", {
            userId: this.context.user,
            linkId: this.props.link.id,
        }).then(response => {
            const vote = response.data;
            this.props.onUpvote(vote);
        })
    }

    render() {
        let { link, index } = this.props;
        let upvote = null;
        // findIndex returns -1 when it doesn't find what it looks for
        const hasVoted = link.votes.findIndex(vote => vote.userId === this.context.user) !== -1
        if (this.context.user) {
            if (!hasVoted) {
                upvote = <div className="uparrow" onClick={this.onUpvote}> </div>;
            } else {
                upvote = <div className="arrowspace"> </div>
            }
        }
        return (
            <div className="link">
                <span className="index">{index}.</span>
                {upvote}
                <div className="content">
                    <a href={link.url}>{link.title}</a>
                    <div className="info">
                        {link.votes.length} points by {link.author} in {link.date}
                    </div>
                </div>
            </div>
        )
    }

}
Link.contextType = Context;
