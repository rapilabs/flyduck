module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel' 
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
