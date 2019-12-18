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

// *** FUNCTIONS *** //
// You can include JSX syntax within functions
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
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
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        user.age
    ),
    getLocation(user.location)
);

// *** ELEMENTS *** //
var appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);
