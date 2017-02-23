const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'src/build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: [ 
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/app/index.jsx')
    ],
    output: {
        path: buildPath,
        filename: 'assets/bundle.js'
    },
    devServer: {
        contentBase: 'src/build',
        hot: true,
        inline: true,
        port: 5000,
        host: '0.0.0.0',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loaders : ['react-hot-loader', 'babel-loader'],
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
