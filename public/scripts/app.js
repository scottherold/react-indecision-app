'use strict';

console.log('App.js is running');

// *** JSX VARIABLES *** //
// ** Templates ** //
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Scott Herold'
    ),
    React.createElement(
        'p',
        null,
        'Age: 32'
    ),
    React.createElement(
        'p',
        null,
        'Baltimore'
    )
);

// *** ELEMENTS *** //
var appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(templateTwo, appRoot);
