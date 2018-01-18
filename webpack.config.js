const path = require('path')
const nodeExternals = require('webpack-node-externals')

var serverConfig = {
  target: 'node', entry: './src/server/server.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  devtool: 'inline-source-map',
  externals: [nodeExternals()]
};

var clientConfig = {
  target: 'web',
  entry: './src/client/client.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.scss$/, exclude: /node_modules/,
					use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" },
						{ loader: "sass-loader" }]
        }]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'client.js'
  },
  devtool: 'inline-source-map'
};

module.exports = [ serverConfig, clientConfig ];
