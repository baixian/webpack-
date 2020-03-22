const webpackMerge = require('webpack-merge');
const baseconfig = require('./webpack.base.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = webpackMerge(baseconfig, {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"), // string
        publicPath:'./dist/',
    },
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ],
});