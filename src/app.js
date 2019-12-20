// *** COMPONENTS *** //
class IndecisionApp extends React.Component {
    // * Component Rendering * //
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    // React components are required to use the 'render()' function
    // * Component Rendering * //
    render() {
        return (
            <div>
                {/* 
                    / You can pass data into a React component the 'props'
                    / props are an object that is part of the instantiated component, so you must use 'this.props' to access
                    / props are passed to the instantiated object when the component is called! (see the title being passed in the IndecisionApp component)
                */}
                <h1>{this.props.title}</h1> 
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // * Methods * //
    handlePick() {
        alert('handlePick');
    }

    // * Component Rendering * //
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);

        /*
        / function binding to this (instance of component)
        / binding it to 'this' within the constructor ensures that the function is properly bound in all instances of the component being rendered (instantiated)
        */
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    
    // * Methods * //
    handleRemoveAll(){
        alert(this.props.options);
    }

    // * Component Rendering * //
    render() {
        return (
            <div>
                {/* .bind(this) ensures that handleRemoveAll has the same binding as the render() function */}
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    // Key must be passed
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    // * Component Rendering * //
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    // * Methods * //
    handleAddOption(e) {
        e.preventDefault(); // <-- prevents full-page refresh

        const option = e.target.elements.option.value.trim(); // <-- Cuts whitespace

        // if option present, push to app's options and resets the form
        if(option) {
            alert('option!')
            e.target.elements.option.value = ''; // <-- form reset
        }
    }
    
    // * Component Rendering * //
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));