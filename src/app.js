// *** Displays the components from the main page and manages application state *** //

// *** MODULES *** //
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

// ** app Modules ** //
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss';

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));