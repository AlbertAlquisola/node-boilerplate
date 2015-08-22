module.exports = {
  entry: './js/main',

  output: {
    path: __dirname,
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    root: __dirname + '/js'
  }
};