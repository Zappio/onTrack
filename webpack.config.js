const path = require('path');
const publicDIR = path.join(__dirname, 'public');
const buildDIR = path.join(__dirname, 'public/build');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(buildDIR),
    filename: 'bundle.js'
  },
  module: {
    rules : [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: publicDIR
  }
};