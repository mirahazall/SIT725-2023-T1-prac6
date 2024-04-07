const path = require('path');

module.exports = {
 mode: 'development', // Set the mode option
  entry: '../../public/js/scripts.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
