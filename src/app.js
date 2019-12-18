console.log('App.js is running');

// *** JSX VARIABLES *** //
// ** Templates ** //
const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const templateTwo = (
    <div>
        <h1>Scott Herold</h1>
        <p>Age: 32</p>
        <p>Baltimore</p>
    </div>
);

// *** ELEMENTS *** //
const appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(templateTwo, appRoot);