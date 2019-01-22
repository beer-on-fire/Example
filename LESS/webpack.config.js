const {
  resolve
} = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: resolve(__dirname + '/src/app.js'),
  output: {
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname + '/src/index.html'),
      inject: 'body'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.less/,
      use: [
        'style-loader',
        // 'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.pug$/,
      use: 'pug-loader'
    }, {
      test: /\.(jpg|png|gif|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 7000,
          name: 'assets/[name]-[hash:5].[ext]'
        }
      }, 'image-webpack-loader']
    }]
  }
}