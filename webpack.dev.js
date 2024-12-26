const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // Better debugging
  devServer: {
    static: './dist', // Serve files from dist
    port: 3000, // Set port to 3000
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
});
