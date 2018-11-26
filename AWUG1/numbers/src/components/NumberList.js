//Before using any symbol or library we will have
//to import it
import React, { Fragment } from "react";
import shortid from "shortid";
import Number from "./Number";
//import App from "../App";

function genNumber() {
    return ({
        id: shortid.generate(),
        value: Math.floor(Math.random() * 1000),
    });
}

const genRandomNumbers = (size) => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(genNumber());
    }
    return result;
}

class NumberList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: genRandomNumbers(150)
        }
    }

    onAdd = () => {
        //Important to call setState
        this.setState({
            //The list we pass is a completely new one!
            list: [...this.state.list, genNumber()]
        })
    }

    onRemove = (index) => {
        this.setState({
            list: this.state.list.filter((obj, i) => (index !== i))
        })
    }

    render() {
        let { list } = this.state;
        return (
            <Fragment>
                <div className="numbers">
                    {list.map((obj, index) =>
                        <Number click={() => this.onRemove(index)} key={obj.id} value={obj.value} />
                    )}
                </div>
                <button onClick={this.onAdd}>Add</button>
            </Fragment>
        );
    }
}

// We have to export this component so that
// it is seen from outside this module
export default NumberList;