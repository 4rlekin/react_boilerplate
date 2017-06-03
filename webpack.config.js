const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app: './app/index.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve('public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: [ {loader: "css-loader"}, {loader: "sass-loader"} ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: path.resolve('public', 'index.html'),
        }),
    ]
}

