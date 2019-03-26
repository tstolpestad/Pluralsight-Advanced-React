const path = require('path');

module.exports = {
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./lib')
        ]
    },
    entry:{
        app: ['./lib/renderers/dom.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    }
};