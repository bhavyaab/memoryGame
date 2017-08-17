const webpack = require('webpack')
const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, 'build')
const SRC_DIR = path.resolve(__dirname, 'src')

let plugins = [
  new htmlPlugin({template : `${__dirname}/src/index.html`}),
  new ExtractPlugin('bundle-[hash].css'),
]

const config = {
  plugins,
  devtool: 'eval',
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
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
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}

module.exports = config
