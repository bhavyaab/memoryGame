var webpack = require('webpack')
var path = require('path')
var htmlPlugin = require('html-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, 'build')
var SRC_DIR = path.resolve(__dirname, 'src')

let plugins = [
  new htmlPlugin({template : `${__dirname}/src/index.html`}),
]

var config = {
  plugins,
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
    ],
  },
}

module.exports = config
