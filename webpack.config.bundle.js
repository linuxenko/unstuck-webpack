/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dir_js = path.resolve(__dirname, 'js');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
      app : path.resolve(dir_js, '../index.js'),
    },
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    resolve: {
       modulesDirectories: ['node_modules', 'lib', dir_js],
    },
    devServer: {
        contentBase: dir_build,
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js($|\?)|\.jsx($|\?)/,
                exclude: /node_modules/,
                presets : ['es2015', 'react']
            },
            {
              test : /\.html$/,
              loader : 'file?name=[name].html'
            },
            {
              test: /\.sass($|\?)|\.scss($|\?)|\.css($|\?)/,
              loader: "style-loader!css-loader?minimize!postcss-loader!sass"
            },
            {
              test: /\.png($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
              loader: "url-loader"
            }
        ],
        preLoaders: [
            {
              test: /\.js($|\?)|\.jsx($|\?)/,
              loaders: ['eslint'],
              exclude : [/react-materialize/, /prism/, /FileSaver/, /node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': '"production"'
            }
        })
    ],
    stats: {
        colors: true,
        chunkModules: false
    }
    //devtool: 'source-map'
}
