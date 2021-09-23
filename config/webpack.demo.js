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
    client: {
      overlay: {
        // 把编译的错误显示在浏览器上
        errors: true,
        warnings: false,
      },
      progress: true,
    }
  },
});