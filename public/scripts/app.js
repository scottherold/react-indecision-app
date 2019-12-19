'use strict';

console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
var app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: []
};

// ** ELEMENTS ** //
var appRoot = document.querySelector('#app');

// *** FUNCTIONS *** //
// rendering
var render = function render() {
    // * JSX Templates * //
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,

            /* array.map allows for an array to be mapped to a new array to transform into JSX w/ key props */
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    // * RENDERING * //
    ReactDOM.render(template, appRoot);
};

// form submit with event (e)
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // <-- prevents full-page refresh

    /*
    / e.target points to the element which triggered the event
    / target.elements provides access to the child elements by the 'name' attribute
    / value grabs the element's value
    */
    var option = e.target.elements.option.value;

    // if option present, push to app's options and resets the form
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// remove all options
var onRemoveAll = function onRemoveAll() {
    if (app.options) {
        app.options = [];
        render();
    }
};

// determine which option to select
var onMakeDecision = function onMakeDecision() {
    // Math.floor() rounds down
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

// *** RENDERING *** //
render();
