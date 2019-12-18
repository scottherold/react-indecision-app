console.log('App.js is running');

// JSX -- JavaScript XML
// const template = <p>This is JSX from app.js</p>
const template = React.createElement("p", null, "This is JSX from app.js"); // <-- Non-JSX Template
const appRoot = document.querySelector('#app');

// *** RENDERING *** //
ReactDOM.render(template, appRoot);