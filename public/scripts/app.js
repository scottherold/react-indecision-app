'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// *** COMPONENTS *** //
// ** React Components ** //
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        // Default state
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };

        // method binding
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    // * Methods * //


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            }); // <-- Function shorthand; if returing an object you must surround the object inside parathensis
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            // removes the option from the array if it equals the option passed into the function
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    }) // <-- function shorthand
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            }

            if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            }); // <-- Function shorthand; if returing an object you must surround the object inside parathensis
        }

        // * Component Rendering * //

    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                ' ',
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0 // Remember: Boolean false values are not rendered! This will toggle invisible if no options.
                    , handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// * IndecisionApp Default Props * //


IndecisionApp.defaultProps = {
    options: []
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        // Default Component State
        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined
        };

        // Method Binding
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2); // <-- binds the component-specific handleAddOption for grabbing form data
        return _this2;
    }

    // * Methods * //
    /*
    / This method is being kept to grab information from the form within the component
    / the props.handleAddOption() is going to be called within this function to pass data to the parent to manipulate state
    */


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); // <-- prevents full-page refresh

            var option = e.target.elements.option.value.trim(); // <-- Cuts whitespace
            e.target.elements.option.value = ''; // <-- clear form
            var error = this.props.handleAddOption(option); // <-- returns undefined if everything goes well

            // Error Handling (Data Validation)
            this.setState(function () {
                return { error: error };
            }); // <-- Function shorthand; if returing an object you must surround the object inside parathensis
        }

        // * Component Rendering * //

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// ** Functional Components ** //

/*
/ Since functional components take props as an argument, you do not need to use this.props, but just props
*/

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// * Header Default Props * //
Header.defaultProps = {
    title: 'Indecision'
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),

        // Key must be passed
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption // <-- prop chaining
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {

                /* 
                / This is the proper way to send the data to the main component
                / you need to grab the option's text value to send to the Component to manipulate the state
                */
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'remove'
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions // <-- disables button if not options
            },
            'What should I do?'
        )
    );
};

// *** RENDERING *** //
ReactDOM.render(React.createElement(IndecisionApp, { options: ['Option one', 'Option two'] }), document.querySelector('#app'));
