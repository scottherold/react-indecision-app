// *** Add option form *** //

// *** MODULES *** //
import React from 'react';

// *** COMPONENT *** //

/*
/ Refactored to ES6 Class Structure (with .babelrc plugin)
/ state is now a class property
/ 'Event Handler' methods changed to arrow function in order to remove arcane 'this' binding
/ Unnecessary constructor removed
*/
export default class AddOption extends React.Component {
    // Default Component State
    state = {
        error: undefined
    }
    
    // * Methods * //
    // Event Handlers //
    /*
    / This method is being kept to grab information from the form within the component
    / the props.handleAddOption() is going to be called within this function to pass data to the parent to manipulate state
    */
    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form
                    className="add-option"
                    onSubmit={this.handleAddOption}
                >
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
            </form>
            </div>
        );
    }
}