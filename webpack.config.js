// *** Configuration of webpack *** //

// *** MODULES *** //
// ** native Modules ** //
const path = require('path');

// *** EXPORTS *** //
module.exports = (env) => {
    const isProduction = env === 'production'; // <-- Checks to see production or development environment

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/, // <-- supports both css and scss files
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/'
        }
    }
};
