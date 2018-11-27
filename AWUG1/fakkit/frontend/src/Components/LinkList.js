import React, { Component } from 'react'

export default class LinkList extends Component {
    constructor() {
        super();
        this.state = {
            links: [],
            loading: true,
        }
    }

    render() {
        let linklist;
        if (this.state.loading) {
            linklist = <p>Loading...</p>
        }
        //TO DO: Render the list when we have one
        return (
            <div>
                {linklist}
            </div>
        )
    }
}
