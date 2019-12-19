'use strict';

console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
var app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: ['One', 'Two']
};

// ** User Variables ** //
var userName = 'Scott';
var userAge = 32;
var userLocation = 'Baltimore';

var user = {
    name: 'Scott',
    age: 32,
    location: 'Baltimore'
};

// ** Counter Variables ** //
var count = 0;

// *** FUNCTIONS *** //
// ** Location App ** //
// You can include JSX syntax within functions
var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

// ** Counter App ** //
// Rendering
var renderCounterApp = function renderCounterApp() {
    /* 
    / Ternary operator used for conditional name display
    / Logical and operator used for age validation
    / You can set functions within JSX expressions
    / If the function returns 'undefined' it will not display the data within the expression
    */
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Resent'
        )
    );

    // Rendering
    ReactDOM.render(templateTwo, appRoot);
};

// increments counter
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

// decrements counter
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

// reset button
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

// *** JSX VARIABLES *** //
// ** Templates ** //
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

// *** ELEMENTS *** //
var appRoot = document.querySelector('#app');

// *** RENDERING *** //
renderCounterApp();
