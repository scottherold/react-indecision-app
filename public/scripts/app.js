'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// *** Playing with JS Classes *** //

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi, I am ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old.';
        }
    }]);

    return Person;
}();

// student subclass


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        // <-- calls the parent class's constructor; must feed parent class constructor arguments to this super() function
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            /*
            / the logical not operator (!!) returns false if empty string present (undefined)
            / If there is a value, it will still return true, however
            */
            return !!this.major;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            /*
            / super acts as an object representation of the parent class.
            / because of this, you can access the methods of the parent class by dot notation, as you can with any object
            */
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            if (this.hasMajor()) {
                description += ' Their major is ' + this.major + '.';
            }

            return description;
        }
    }]);

    return Student;
}(Person);

// Traveller subclass


var Traveller = function (_Person2) {
    _inherits(Traveller, _Person2);

    function Traveller(name, age, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveller, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation; // <-- logical not operator (to handle undefined)
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);

            if (this.hasHomeLocation()) {
                greeting += ' I\'m visting from ' + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveller;
}(Person);

var me = new Student('Andrew', 26, 'Computer Science');
console.log(me.getDescription());

var other = new Student();
console.log(other.getDescription());

var me2 = new Traveller('Scott', 32, 'Baltimore');
console.log(me2.getGreeting());

var other2 = new Traveller();
console.log(other2.getGreeting());
