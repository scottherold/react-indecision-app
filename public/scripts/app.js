'use strict';

console.log('App.js is running');

// *** JSX VARIABLES *** //
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);
