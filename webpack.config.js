/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
      app : path.resolve(dir_js, '../index.js'),
      vendor : ['jquery', 'materialize-css/dist/js/materialize.js', 'react', 'react-dom', 'react-materialize', './css/vendor.sass']
    },
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    resolve: {
       modulesDirectories: ['node_modules', dir_js],
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
              loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass?sourceMap")
            },
            {
                test: /\.png($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'file?name=assets/[name].[ext]'
            }
        ],
        preLoaders: [
            {
              test: /\.js($|\?)|\.jsx($|\?)/,
              loaders: ['eslint']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {  allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "[name].js"),
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true,
        chunkModules: false
    },
    devtool: 'source-map'
}
