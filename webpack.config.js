var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      { test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/ }
    ],

    loaders: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      {
        loader: 'react-hot',
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src")
      },
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};