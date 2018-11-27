//Before using any symbol or library we will have to import it
import React, { Fragment } from "react";
import shortid from "shortid";
import Number from "./Number";
//import App from "../App";

function genNumber() {
    return ({
        id: shortid.generate(),
        value: Math.floor(Math.random() * 1000),
        selected: false, //This can do it random: Math.random() < 0.1,
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
        this.setState(prevState => ({
            //The list we pass is a completely new one!
            list: [...prevState.list, genNumber()]
        }))
    }
    onSelect = (index) => {
        this.setState(prevState=>({
            list: prevState.list.map((obj, i) =>
                (i !== index ?
                    obj : { ...obj, selected: !obj.selected }
                )
                /* This is a larger way to do this
                {                
                    if (i !== index) {
                        return obj;
                    } else {
                        return {
                            ...obj,
                            selected: !obj.selected, //toggle
                        }
                    }
                }*/
            )
        }))
    }
    removeSelected = (index) => {
        this.setState({
            list: this.state.list.filter(obj => !obj.selected)
        })
    }

    /*onRemove = (index) => {
        this.setState({
            list: this.state.list.filter((obj, i) => (index !== i))
        })
    }*/

    render() {
        let { list } = this.state;
        return (
            <Fragment>
                <div className="numbers">
                    {list.map((obj, index) =>
                        <Number
                            selected={obj.selected}
                            click={() => this.onSelect(index)}
                            key={obj.id}
                            value={obj.value} />
                    )}
                </div>
                <button onClick={this.onAdd}>Add</button>
                <button onClick={this.removeSelected}>Remove selected</button>
            </Fragment>
        );
    }
}

// We have to export this component so that it is seen from outside this module
export default NumberList;