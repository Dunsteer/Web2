const path = require('path');

module.exports = {
  entry: './src/2-rxjs.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  devtool:'inline-source-map'
};

