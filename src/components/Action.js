// *** Triggers the selection of an option on the main page *** //

// *** MODULES *** //
import React from 'react';

// *** FUNCTIONAL COMPONENT *** //
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

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Action;