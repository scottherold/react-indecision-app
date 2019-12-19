console.log('built-it-js is running');

// *** VARIABLES *** //
// ** App Variables ** //
const app = {
    title: 'Visibility Toggle',
    details: 'Hey. These are some details you can now see!'
};

let visibility = false;

// ** ELEMENTS ** //
const appRoot = document.querySelector('#app');

// *** FUNCTIONS *** //
// rendering
const render = () => {
    // * JSX Templates * //
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>{app.details}</p>
                </div>
            )}
        </div>
    );

    // * RENDERING * //
    ReactDOM.render(jsx, appRoot);
};

// toggle visibility
const toggleVisibility = () => {
    visibility = !visibility;
    render()
};

// *** RENDERING *** //
render();