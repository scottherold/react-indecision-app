'use strict';

console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
var app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: []
};

// *** FUNCTIONS *** //
// rendering
var renderApp = function renderApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
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

    // * ELEMENTS * //
    var appRoot = document.querySelector('#app');

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
        renderApp();
    }
};

// remove all options
var onRemoveAll = function onRemoveAll() {
    if (app.options) {
        app.options = [];
        renderApp();
    }
};

// *** RENDERING *** //
renderApp();
