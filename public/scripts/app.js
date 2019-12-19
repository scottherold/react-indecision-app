'use strict';

console.log('built-it-js is running');

// *** VARIABLES *** //
// ** App Variables ** //
var app = {
    title: 'Visibility Toggle',
    details: 'Hey. These are some details you can now see!'
};

var visibility = false;

// ** ELEMENTS ** //
var appRoot = document.querySelector('#app');

// *** FUNCTIONS *** //
// rendering
var render = function render() {
    // * JSX Templates * //
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                app.details
            )
        )
    );

    // * RENDERING * //
    ReactDOM.render(jsx, appRoot);
};

// toggle visibility
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

// *** RENDERING *** //
render();
