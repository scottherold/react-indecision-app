// *** Adds option to list of option on main page *** //

// *** MODULES *** //
import React from 'react';

// *** COMPONENT *** //
export default class AddOption extends React.Component {
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
        const error = this.props.handleAddOption(option); // <-- returns undefined if everything goes well

        // Error Handling (Data Validation)
        this.setState(() => ( { error })); // <-- Function shorthand; if returing an object you must surround the object inside parathensis

        // if no error, clear the input form
        if (!error) {
            e.target.elements.option.value = '';
        }
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