// *** Displays all the options available and also the remove options button *** //

// *** MODULES *** //
import React from 'react';
import Option from './Option'

// *** FUNCTIONAL COMPONENT -- Refactored to 'implict return' aka, function shorthand *** //
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions} 
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>} {/* <-- Default message for no options in state  */}
        {
            // Key must be passed
            props.options.map((option, index) => 
                <Option 
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption} // <-- prop chaining
                />
            )
        }
    </div>
);

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Options;