const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js', // Cache-busting using content hash
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devtool: 'source-map', // Source maps for production
});
