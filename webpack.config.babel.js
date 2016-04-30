const path = require('path');
const webpack = require('webpack');

const wpconfig = {
  entry: {
    main: [
      './src/index.js'
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    noParse: [
      /aws\-sdk/
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = wpconfig;
