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

// *** FUNCTIONS *** //
// You can include JSX syntax within functions
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
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

/* 
/ Ternary operator used for conditional name display
/ Logical and operator used for age validation
/ You can set functions within JSX expressions
/ If the function returns 'undefined' it will not display the data within the expression
*/
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// *** ELEMENTS *** //
const appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);