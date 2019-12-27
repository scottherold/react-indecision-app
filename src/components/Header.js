// *** Displays the header on each page *** //

// *** MODULES *** //
import React from 'react';

// *** FUNCTIONAL COMPONENT *** //
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

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Header;