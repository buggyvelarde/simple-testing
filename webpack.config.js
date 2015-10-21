var webpack = require('webpack')
var resolve = require('path').resolve

var app = resolve(__dirname, 'app')
var dist = resolve(__dirname, 'dist')

module.exports = {
  context: __dirname,
  output: {
    path: dist,
    filename: 'app.js'
  },
  plugins: [
  ],
  module: {
  }
}
