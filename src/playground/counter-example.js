// *** COMPONENTS *** //
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Default state properties
        this.state = {
            count: 0
        };

        // Function Component-Render Binding
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // * Methods * //
    handleAddOne() {
        /*
        / You cannot directly manipulate the state
        / To change state, you must use the built in this.setState() function
        / Within the function, prevState is available as an argument (you can name this whatever)
        / Accessing prevState, you can access the previous state and update it by returning setState()
        */
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    // * Rendering * //
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// *** RENDERING *** //
ReactDOM.render(<Counter />, document.querySelector('#app'));



// // ** Counter Variables ** //
// let count = 0;

// // *** FUNCTIONS *** //
// // Rendering
// const renderCounterApp = () => {
//     /* 
//     / Ternary operator used for conditional name display
//     / Logical and operator used for age validation
//     / You can set functions within JSX expressions
//     / If the function returns 'undefined' it will not display the data within the expression
//     */
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Resent</button>
//         </div>
//     );

//     // Rendering
//     ReactDOM.render(templateTwo, appRoot);
// };

// // increments counter
// const addOne = () => { 
//     count++;
//     renderCounterApp();
// };

// // decrements counter
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// // reset button
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// // *** RENDERING *** //
// renderCounterApp();