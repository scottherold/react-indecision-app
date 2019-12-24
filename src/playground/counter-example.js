// *** COMPONENTS *** //
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Default state properties
        this.state = {
            count: 0
        };

        // Function Component-Render Binding
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // * Methods * //
    // Lifecycle Methods //
    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'), 10);

        // scrub to see if count is a number
        if (!isNaN(count)) {
            this.setState(() => ({ count: count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // only save data if data has changed
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    // Event Handling Methods //
    handleAddOne() {
        /*
        / You cannot directly manipulate the state
        / To change state, you must use the built in this.setState() function
        / Within the function, prevState is available as an argument (you can name this whatever)
        / Accessing prevState, you can access the previous state and update it by returning setState()
        */
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    // * Rendering * //
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// *** RENDERING *** //
ReactDOM.render(<Counter />, document.querySelector('#app'));