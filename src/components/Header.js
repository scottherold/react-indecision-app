// *** Displays the header on each page *** //

// *** MODULES *** //
import React from 'react';

// *** FUNCTIONAL COMPONENT -- Refactored to 'implict return' aka, function shorthand *** //
const Header = (props) => (
    <div className="header">
        {/* 
            / You can pass data into a React component the 'props'
            / props are an object that is part of the instantiated component, so you must use 'this.props' to access
            / props are passed to the instantiated object when the component is called! (see the title being passed in the IndecisionApp component)
        */}
        <h1 className="header__title">{props.title}</h1> 
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
);

// * Header Default Props * //
Header.defaultProps = {
    title: 'Indecision'
};

// *** EXPORTS *** //
// For non-class components, use the export object so that React developer tools knows how to name your component!
export default Header;