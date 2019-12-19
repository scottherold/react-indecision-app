console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
const app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: ['One', 'Two']
};

// ** User Variables ** //
const userName = 'Scott';
const userAge = 32;
const userLocation = 'Baltimore';

const user = {
    name: 'Scott',
    age: 32,
    location: 'Baltimore'
};

// ** Counter Variables ** //
let count = 0;

// *** FUNCTIONS *** //
// ** Location App ** //
// You can include JSX syntax within functions
const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

// ** Counter App ** //
// Rendering
const renderCounterApp = () => {
    /* 
    / Ternary operator used for conditional name display
    / Logical and operator used for age validation
    / You can set functions within JSX expressions
    / If the function returns 'undefined' it will not display the data within the expression
    */
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Resent</button>
        </div>
    );

    // Rendering
    ReactDOM.render(templateTwo, appRoot);
};

// increments counter
const addOne = () => { 
    count++;
    renderCounterApp();
};

// decrements counter
const minusOne = () => {
    count--;
    renderCounterApp();
};

// reset button
const reset = () => {
    count = 0;
    renderCounterApp();
};

// *** JSX VARIABLES *** //
// ** Templates ** //
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// *** ELEMENTS *** //
const appRoot = document.querySelector('#app');

// *** RENDERING *** //
renderCounterApp();