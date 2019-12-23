// *** COMPONENTS *** //
// ** React Components ** //
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        // Default state
        this.state = {
            options: props.options
        };

        // method binding
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    // * Methods * //
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }

        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        
        this.setState((prevState) => {

            /*
            / You do not want to directly manipulate the variable in state
            / instead, you want to use the array.concat() method to create a new array that can be saved to the state
            */
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    // * Component Rendering * //
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} /> {/* Refactored with default props (see the component) */}
                <Action 
                    hasOptions={this.state.options.length > 0} // Remember: Boolean false values are not rendered! This will toggle invisible if no options.
                    handlePick={this.handlePick}
                /> 
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// * IndecisionApp Default Props * //
IndecisionApp.defaultProps = {
    options: []
};

class AddOption extends React.Component {
    constructor(props) {
        super(props)

        // Default Component State
        this.state = {
            error: undefined
        };

        // Method Binding
        this.handleAddOption = this.handleAddOption.bind(this); // <-- binds the component-specific handleAddOption for grabbing form data
    }
    
    // * Methods * //
    /*
    / This method is being kept to grab information from the form within the component
    / the props.handleAddOption() is going to be called within this function to pass data to the parent to manipulate state
    */
    handleAddOption(e) {
        e.preventDefault(); // <-- prevents full-page refresh

        const option = e.target.elements.option.value.trim(); // <-- Cuts whitespace
        e.target.elements.option.value = ''; // <-- clear form
        const error = this.props.handleAddOption(option); // <-- returns undefined if everything goes well

        // Error Handling (Data Validation)
        this.setState(() => {
            return { error };
        });
    }
    
    // * Component Rendering * //
    render() {
        return (
            <div>
                {/* Conditional and operator use */}
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// ** Functional Components ** //

/*
/ Since functional components take props as an argument, you do not need to use this.props, but just props
*/

const Header = (props) => {
    return (
        <div>
            {/* 
                / You can pass data into a React component the 'props'
                / props are an object that is part of the instantiated component, so you must use 'this.props' to access
                / props are passed to the instantiated object when the component is called! (see the title being passed in the IndecisionApp component)
            */}
            <h1>{props.title}</h1> 
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

// * Header Default Props * //
Header.defaultProps = {
    title: 'Indecision'
};

const Options = (props) => {
    return (
        <div>
            {/* .bind(this) ensures that handleRemoveAll has the same binding as the render() function */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                // Key must be passed
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions} // <-- disables button if not options
            >
                What should I do?
            </button>
        </div>
    );
};

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']}/>, document.querySelector('#app'));