const path = require('path');

var serverConfig = {
  target: 'node',
  entry: './src/server/server.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  devtool: 'inline-source-map'
};

var clientConfig = {
  target: 'web',
  entry: './src/client/client.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
};

module.exports = [ serverConfig, clientConfig ];
