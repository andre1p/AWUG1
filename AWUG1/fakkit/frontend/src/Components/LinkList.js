import React, { Component } from 'react'
import axios from "axios";
import Link from "./Link";
import { cloneDeep } from 'lodash';

export default class LinkList extends Component {
    constructor() {
        super();
        this.state = {
            links: [],
            loading: true,
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:4000/links?_embed=votes")
            .then(response => {
                this.setState({
                    links: response.data,
                    loading: false,
                })
            });
    }

    onUpvote = (vote) => {
        // TO DO: Add the vote to the appropriate link in the linklist...
        this.setState(prevState => {
            let newState = cloneDeep(prevState); //We cloned all and we can do any change we want
            newState.links.forEach(link => {
                if (link.id === vote.linkId) {
                    link.votes.push(vote);
                }
            });
            return newState;
        });
    }

    render() {
        if (this.state.loading) {
            return <p>Loading...</p>
        }
        let { links } = this.state;
        return (
            <div>
                {links.map((link, index) =>
                    <Link key={link.id}
                        index={index + 1}
                        link={link}
                        onUpvote={this.onUpvote}
                    />
                )}
            </div>
        )
    }
}
