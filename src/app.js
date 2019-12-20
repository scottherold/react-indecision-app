// *** COMPONENTS *** //
class IndecisionApp extends React.Component {
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
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
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

// *** RENDERING *** //
ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));