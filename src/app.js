console.log('App.js is running');

// *** VARIABLES *** //
// ** App Variables ** //
const app = {
    title: 'App Title',
    subtitle: 'Welcome to the app',
    options: []
};

// ** ELEMENTS ** //
const appRoot = document.querySelector('#app');

// *** FUNCTIONS *** //
// rendering
const render = () => {
    // * JSX Templates * //
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    /* array.map allows for an array to be mapped to a new array to transform into JSX w/ key props */
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

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
        render();
    }
};

// remove all options
const onRemoveAll = () => {
    if(app.options) {
        app.options = [];
        render();
    }
};

// determine which option to select
const onMakeDecision = () => {
    // Math.floor() rounds down
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// *** RENDERING *** //
render()