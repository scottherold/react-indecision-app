// *** Displays the components from the main page and manages application state *** //

// *** MODULES *** //
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

// ** app Modules ** //
import IndecisionApp from './components/IndecisionApp'

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));