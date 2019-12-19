console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
const app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: []
};

// *** FUNCTIONS *** //
// rendering
const renderApp = () => {
    // * JSX Templates * //
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    // * ELEMENTS * //
    const appRoot = document.querySelector('#app');

    // * RENDERING * //
    ReactDOM.render(template, appRoot);
};

// form submit with event (e)
const onFormSubmit = (e) => {
    e.preventDefault(); // <-- prevents full-page refresh

    /*
    / e.target points to the element which triggered the event
    / target.elements provides access to the child elements by the 'name' attribute
    / value grabs the element's value
    */
    const option = e.target.elements.option.value;

    // if option present, push to app's options and resets the form
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

// remove all options
const onRemoveAll = () => {
    if(app.options) {
        app.options = [];
        renderApp();
    }
};

// *** RENDERING *** //
renderApp()