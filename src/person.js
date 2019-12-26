// *** This file contains person functions *** //
// *** FUNCTIONS *** //
const isAdult = (age) => {
    if (age >= 18) {
        return true;
    }
    return false;
};

const canDrink = (age) => {
    if (age >= 21) {
        return true;
    }
    return false;
};

// ** Default Function ** //
export default (age) => {
    if (age >= 65) {
        return true;
    }
    return false;
};

// *** EXPORTS *** //
export {
    isAdult,
    canDrink
};