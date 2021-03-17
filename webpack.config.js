const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const getEntry = function () {
  if (isDev) {
    return [
      './src/main.js',
      'webpack-hot-middleware/client?&overlay=false&reload=true',
    ];
  } else {
    return {
      app: './src/main.js',
    };
  }
};

const config = {
  mode: isDev ? 'development' : 'production',
  entry: getEntry(),
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          compact: true,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: 'static/[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'cwirth-frontend-test',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, 'favicon.ico'),
    }),

    new CopyPlugin([
      {
        from: '/src/static/*',
        to: '/dist/static',
        context: 'src/',
      },
    ]),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};

// Set up hot module replacement if in development
if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
