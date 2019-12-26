// ** This is the application entry point *** //

// *** MODULES *** //
import { square, add } from './utils.js';
import { isAdult, canDrink } from './person';

console.log('app.js is running!');
console.log(square(4));
console.log(add(4,4));
console.log(isAdult(16));
console.log(isAdult(20));
console.log(canDrink(16));
console.log(canDrink(22));