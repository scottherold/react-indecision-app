// entry -> output

// *** MODULES *** //
// ** native Modules ** //
const path = require('path');

// *** EXPORTS *** //
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};