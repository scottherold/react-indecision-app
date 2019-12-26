// *** This file contains utility functions *** //
console.log('utils.js is running');

// *** FUNCTIONS *** //
const square = (x) => x * x;
const add = (a, b) => a + b;

// ** Default Function ** //
export default (a, b) => a - b;

// *** EXPORTS *** //
export {
    square,
    add
};