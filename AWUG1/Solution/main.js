
const Person = ({ selected, lastname, name, onClick }) => {
    let classes = ["person"];
    if (selected) {
        classes.push("selected");
    }
    return <div onClick={onClick} className={classes.join(" ")}>
        <span className="name">{name}</span>
        <span className="lastname">{lastname}</span>
    </div>
}

class PersonList extends React.Component {
    constructor() {
        super();
        this.state = { list: null }
    }

    componentDidMount = () => {
      fetch('people.json').then(r => r.json()).then(json => {
          this.setState({ list: json });
      });
    }

    onSelect = (index) => () => {
        this.setState(prevState => ({
            list: prevState.list.map((p, i) => (i === index 
                ? { ...p, selected: !p.selected }
                : p))
        }));
    }

    selectedStr = () => {
        const fullname = p => `${p.name} ${p.lastname}`
        const { list } = this.state;
        const names = list.filter(p => p.selected).map(fullname);
        switch (names.length) {
            case 0: return '';
            case 1: return names[0];
            default:
                return names.slice(0, names.length-1).join(', ') + 
                   " and " + 
                   names.slice(-1)
        }
    }

    render() {
        let { list } = this.state;
        if (list === null) {
            return <div>Loading...</div>
        }
        return <div>
            <div className="person-list">
                {list.map((person, i) => 
                    <Person key={i} onClick={this.onSelect(i)} {...person} />)}
            </div>
            <p><b>Selected:</b><br />{this.selectedStr()}</p>
        </div>;
    }
}

ReactDOM.render(
    <PersonList />,
    document.getElementById("root")
);
