'use strict';

console.log('App.js is running');

// *** VARIABLES *** //
var userName = 'Scott';
var userAge = 32;
var userLocation = 'Baltimore';

var user = {
    name: 'Scott',
    age: 32,
    location: 'Baltimore'
};

var app = {
    title: 'App Title',
    subtitle: 'Welcome to the app'
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
    React.createElement(
        'p',
        null,
        app.subtitle
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
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);

// *** ELEMENTS *** //
var appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);
