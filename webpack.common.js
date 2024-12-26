const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Default bundle name
    clean: true, // Cleans the output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Matches CSS files
        use: ['style-loader', 'css-loader'], // Loaders to process CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to the HTML template
    }),
  ],
};
