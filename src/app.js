console.log('App.js is running');

// *** VARIABLES *** //
const userName = 'Scott';
const userAge = 32;
const userLocation = 'Baltimore';

const user = {
    name: 'Scott',
    age: 32,
    location: 'Baltimore'
};

const app = {
    title: 'App Title',
    subtitle: 'Welcome to the app'
};

// *** JSX VARIABLES *** //
// ** Templates ** //
const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);

// *** ELEMENTS *** //
const appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);