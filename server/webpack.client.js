const path = require('path');
const merge = require('webpack-merge');
const BaseConfig = require('./webpack.base');

const WebpackConfig = {

    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(BaseConfig, WebpackConfig);