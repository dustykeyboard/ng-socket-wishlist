var webpack = require('webpack');
module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    vendor: ['angular', 'socket.io-client']
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};
