const {
  merge
} = require('webpack-merge');
const dist = require('./webpack.dist');

module.exports = merge(dist, {
  devServer: {
    static: './demo/dist',
    compress: true,
    port: 'auto',
    open: true,
    hot: true,
    historyApiFallback: true,
  },
});