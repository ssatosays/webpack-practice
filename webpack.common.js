const path = require('path');

module.exports = {
  entry: {
    app: './src/js/app.js',
    foo: './src/js/foo.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
  ],
};
