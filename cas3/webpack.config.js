const path = require('path');

module.exports = {
  entry: './src/rxjs.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  devtool:'inline-source-map'
};

