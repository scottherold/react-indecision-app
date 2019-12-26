// *** Displays all the options available and also the remove options button *** //

// *** MODULES *** //
import React from 'react';
import Option from './Option'

// *** FUNCTIONAL COMPONENT *** //
const Options = (props) => {
    return (
        <div>
            {/* .bind(this) ensures that handleRemoveAll has the same binding as the render() function */}
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>} {/* <-- Default message for no options in state  */}
            {
                // Key must be passed
                props.options.map((option) => 
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption} // <-- prop chaining
                    />
                )
            }
        </div>
    );
};

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Options;