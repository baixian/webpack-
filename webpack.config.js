const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseconfig = require('./webpackconfig/webpack.base.js');
module.exports = webpackMerge(baseconfig, {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "/dist"),
        publicPath:'/',
    },
    mode: 'development',
    devServer: {
        compress: true,
        port: 8080,
    },
});