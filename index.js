const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const path = require('path');
const fs = require('fs');

const config = require('./webpack.config.js');
const compiler = webpack(config);

const server = express();

server.use(express.json());

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

server.use(
  webpackHotMiddleware(compiler, {
    publicPath: config.output.publicPath,
    reload: true,
  }),
);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
