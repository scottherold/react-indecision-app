// *** COMPONENTS *** //
class Header extends React.Component {
    // React components are required to use the 'render()' function
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

// *** TEMPLATES *** //
const jsx = (
    <div>
        <Header /> {/* <-- This is how you inject a React component */}
        <Action />
        <Options />
        <AddOption />
     </div>
);

// *** RENDERING *** //
ReactDOM.render(jsx, document.querySelector('#app'));