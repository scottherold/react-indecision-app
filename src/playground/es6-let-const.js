// *** This module contains learning material for let and const *** //

var nameVar = 'Andrew';
var nameVar = 'Mike'; // <-- can redfine and reassign var-based variables. This can cause errors that are difficult to debug
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; // <-- can reassign let-based variables, but you cannot redefine them
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // <-- cannot reassign OR redefine
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
// console.log(petName) // <-- won't print

// Block scoping
var fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);