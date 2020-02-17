const path = require('path');
const merge = require('webpack-merge');
const BaseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const WebpackConfig = {

    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(BaseConfig, WebpackConfig);