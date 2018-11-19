function rand(n) {
    return Math.floor(Math.random() * n);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function randomWord() {
    let size = 3 + rand(8);
    let word = "";
    for (let i = 0; i < size; i++) {
        word += alphabet[rand(alphabet.length)];
    }
    return word;
}

function randomParagraph(maxWords) {
    let size = 10 + rand(maxWords - 10);
    let text = "";
    for (let i = 0; i < size; i++) {
        text += randomWord() + " ";
    }
    return text;
}

class Hideable extends React.Component {
    constructor() {
        super();
        this.state = {
            hidden: true,
        }
        // Bind the component to "this" for later
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden() {
        /*SUPER-IMPORTANT: When you change the state of a component,
        you have to call "setState", otherwise React can't know about
        your changes.*/
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        /*
        let content = null;
        if (!this.state.hidden) {
            content = this.props.children;
        }
        return (
            <div>
                <button onClick={this.toggleHidden}>
                    {this.state.hidden ? "Show" : "Hide"}
                </button>
                {content}
            </div>
        );
        */
        return (
            <div>
                <button onClick={this.toggleHidden}>
                    {this.state.hidden ? "Show" : "Hide"}
                </button>
                {!this.state.hidden && this.props.children}
            </div>
        );
    }
}

class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.onIncr = this.onIncr.bind(this);
        this.onDecr = this.onDecr.bind(this);
    }
    onIncr() {
        this.setState({
            count: this.state.count + 1
        });
    }
    onDecr() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        let { count } = this.state;
        return <div className="counter">
            <button onClick={this.onIncr}>+</button>
            <button onClick={this.onDecr}>-</button>
            <span className="count">{count}</span>
        </div>
    }
}

// AbbrevParagraph

class AbbrevParagraph extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }
    toggleExpanded(event) {
        event.preventDefault();
        this.setState({
            expanded: !this.state.expanded,
        });
    }
    render() {
        let { text } = this.props;
        let { expanded } = this.state;
        let words = text.split(" ");
        if (!expanded) {
            words = words.slice(0, 10);
        }
        let abbrevtext = words.join(" ");
        return <div>
            <p>{abbrevtext}<br />
                <a href=" " onClick={this.toggleExpanded}>
                    {expanded ? "Read less" : "Read more"}
                </a>
            </p>
        </div>;

    }
}

ReactDOM.render(
    <Hideable>
        <h1>{randomWord()}</h1>
        <p>{randomParagraph(100)}</p>
        <Counter />
        <Counter />
        <AbbrevParagraph text={randomParagraph(200)} />
    </Hideable>,
    document.getElementById("root")
);