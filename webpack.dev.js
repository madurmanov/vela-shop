const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },
});
