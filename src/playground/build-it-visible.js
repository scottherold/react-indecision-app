// *** COMPONENTS *** //
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        // default state
        this.state = {
            title: 'Visibility Toggle',
            details: 'Hey. These are some details that you can now see!',
            visibility: false,
        };

        // method binding
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    // * Methods * //
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    // * Rendering * //
    render() {
        return (
            <div>
            <h1>{this.state.title}</h1>
            <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visibility && (
                <div>
                    <p>{this.state.details}</p>
                </div>
            )}
        </div>
        );
    }
};

// *** RENDERING *** //
ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));