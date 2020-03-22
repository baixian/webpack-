const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OWNNER_ENV = process.env.OWNNER_ENV;
let ENVIRONMENT = '';
let mainJS = '';
let htmlFilename ='';
if (OWNNER_ENV == 'dev') {
    ENVIRONMENT = "dev";
    mainJS = 'main.js';
    htmlFilename = './index.html'
} else if(OWNNER_ENV == 'test') {
    ENVIRONMENT = "testenv";
    mainJS = 'dist/main.js';
    htmlFilename = '../index.html';
}else if(OWNNER_ENV == 'pro'){
    ENVIRONMENT = "pro";
}
module.exports = {
    output: {
        filename: "[name].[hash].js",
        chunkFilename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            require('autoprefixer')({
                                "overrideBrowserslist": [
                                    "defaults",
                                    "not ie < 11",
                                    "last 2 versions",
                                    "> 1%",
                                    "iOS 7",
                                    "last 3 iOS versions"
                                ]
                            }),
                        ]
                    }
                },'less-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /antd.*\.less|rc-tree.*\.less$/,
                use: ['style-loader','css-loader', 'less-loader',],
                include: /node_modules/
            },
            {

                test: /antd.*\.css$/,
                use: ['style-loader','css-loader'],
                include: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react模板',
            template: './index.ejs',
            filename: htmlFilename,
            files: {
                js: [mainJS]
            }
        }),
        new webpack.DefinePlugin({
            'ENVIRONMENT': JSON.stringify(ENVIRONMENT),
        }),
    ],
}