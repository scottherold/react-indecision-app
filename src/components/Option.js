// *** Displays the individual option on the main page *** //

// *** MODULES *** //
import React from 'react';

// *** FUNCTIONAL COMPONENT -- Refactored to 'implict return' aka, function shorthand *** //
const Option = (props) => (
    <div>
        {props.optionText}
        <button

            /* 
            / This is the proper way to send the data to the main component
            / you need to grab the option's text value to send to the Component to manipulate the state
            */
            onClick={(e) => {
                props.handleDeleteOption(props.optionText); 
            }}
        >
            remove
        </button>
    </div>
);

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Option;
