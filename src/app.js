// *** This is the application entry point *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import ReactDOM from 'react-dom';

// ** app Modules ** //
import IndecisionApp from './components/IndecisionApp';

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']}/>, document.querySelector('#app'));