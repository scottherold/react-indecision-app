// *** Modal component for 'decision' *** //

// *** MODULES *** //
import React from 'react';
import Modal from 'react-modal';

// *** FUNCTIONAL COMPONENT -- Refactored to 'implict return' aka, function shorthand *** //
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} // <-- Converts variable that can be a string or undefined into a boolean
        onRequestClose={props.handleClearPick}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {/* Logical && Operator to determine if selectedOption is provided */}
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearPick}>Okay</button>
    </Modal>
);

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default OptionModal;