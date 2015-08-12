var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var postcssNested = require('postcss-nested');

module.exports = {
    entry: './client/app/app.js',
    output: {
        filename: 'bundle.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/]
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, csswring, postcssNested];
    }
};