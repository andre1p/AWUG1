class StarWarsCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            loading: true,
            filter: "",
        }
        this.filterChange = this.filterChange.bind(this);
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    characters: json.results,
                    loading: false,
                });
            });
    }

    filterChange() {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return this.state.loading ?
            <p>Loading ...</p> :
            <div>
                Filter: &nbsp;
                <input type="text" onChange={this.filterChange}
                    value={this.state.text} />

                <ul>
                    {this.state.characters.filter(character =>
                        character.name.includes(this.state.filter)
                    ).map(character =>
                        <li key={character.name}>
                            {character.name}
                        </li>)}
                </ul>
            </div>;
    }
}

class FilterBox extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "this is the filter",
        }
        //(3.And the binding!!)
        this.filterChange = this.filterChange.bind(this);
    }
    //2:Method that updates the state by using the new value
    //  in the <input> box.
    filterChange() {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        //1:<input with an attribute "value" taken from the
        //  state of the component.
        return (
            <div>
                Filter: &nbsp;
                <input type="text" onChange={this.filterChange}
                    value={this.state.text} />
            </div>
        );
    }
}

ReactDOM.render(
    //<FilterBox />,
    <StarWarsCharacters />,
    document.getElementById("root")
);
