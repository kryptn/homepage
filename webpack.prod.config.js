const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'src/build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: [path.join(__dirname, 'src/app/index.jsx')],
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: 'assets/bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader',
                exclude: [nodeModulesPath],
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png$/, loader: 'url-loader?limit=100000'},
            {test: /\.jpg$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        ]
    }

};

module.exports = config;
