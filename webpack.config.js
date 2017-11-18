const path = require('path')
const webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: path.join(__dirname, '/app/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    watch:true,
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
          { test: /\.html$/, loader: 'html-loader' },
          { test: /\.(jpe?g|png|gif|svg)$/i,loader:'img-loader!url-loader'}
        ]
      },
      devtool: "#inline-source-map"
};
