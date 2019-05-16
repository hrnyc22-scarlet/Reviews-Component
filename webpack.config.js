var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [/\.db$/,/\.sql$/],
        loader: 'babel-loader'
        // Take a look at your `.babelrc` file (located in same the directory
        // as your `package.json` file) to see how your Babel presets are
        // configured.
      }
    ]
  }
};