const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './app/index.js',
    output: {
        path       : path.join(__dirname, '/public/static/build/'),
        filename   : 'main.js',
        publicPath : 'static/build/'
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },

            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },

            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },

            { test: /\.json$/, loader: 'json-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'app/index.html'
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    eslint: {
        configFile: '.eslintrc'
    }
};