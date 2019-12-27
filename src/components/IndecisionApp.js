// *** Displays the components from the main page and manages application state *** //

// *** MODULES *** //
import React from 'react';

// ** app Modules ** //
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// *** COMPONENT *** //
export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        // Default state
        this.state = {
            options: []
        };

        // method binding
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    // * Methods * //
    // Lifecycle Methods //
    componentDidMount() {
       try {
            // updates state from local storage
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); // <-- parses JSON to JavaScript object

            // check to see if options present before changing state; default state of empty array becomes value
            if (options) {
                this.setState(() => ({ options: options }));
            }
       } catch (e) {
           // Do nothing on error; default state of empty array becomes value
       }
    }

    componentDidUpdate(prevProps, prevState) {
        // only save data if data has changed
        if (prevState.options.length !== this.state.options.length) {
            // Save updated data to local storage
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // Event Handlers //
    handleDeleteOptions() {
        this.setState(() => ({ options: [] })); // <-- Function shorthand; if returing an object you must surround the object inside parathensis
    }

    handleDeleteOption(optionToRemove) {
        // removes the option from the array if it equals the option passed into the function
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option ) // <-- function shorthand
        }));
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
        
        this.setState((prevState) => ({ options: prevState.options.concat(option) })); // <-- Function shorthand; if returing an object you must surround the object inside parathensis
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}