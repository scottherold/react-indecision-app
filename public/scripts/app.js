'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// *** COMPONENTS *** //
var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        // Default state properties
        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };

        // Function Component-Render Binding
        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        return _this;
    }

    // * Methods * //


    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            /*
            / You cannot directly manipulate the state
            / To change state, you must use the built in this.setState() function
            / Within the function, prevState is available as an argument (you can name this whatever)
            / Accessing prevState, you can access the previous state and update it by returning setState()
            */
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }

        // * Rendering * //

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

// *** RENDERING *** //


ReactDOM.render(React.createElement(Counter, null), document.querySelector('#app'));

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
