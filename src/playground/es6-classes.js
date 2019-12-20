// *** Playing with JS Classes *** //

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// student subclass
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // <-- calls the parent class's constructor; must feed parent class constructor arguments to this super() function
        this.major = major;
    }
    hasMajor() {
        /*
        / the logical not operator (!!) returns false if empty string present (undefined)
        / If there is a value, it will still return true, however
        */
        return !!this.major;
    }
    getDescription() {
        /*
        / super acts as an object representation of the parent class.
        / because of this, you can access the methods of the parent class by dot notation, as you can with any object
        */
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

// Traveller subclass
class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation; // <-- logical not operator (to handle undefined)
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Andrew', 26, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me2 = new Traveller('Scott', 32, 'Baltimore');
console.log(me2.getGreeting());

const other2 = new Traveller();
console.log(other2.getGreeting());
