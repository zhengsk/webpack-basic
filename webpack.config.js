const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const DashboardPlugin = require('webpack-dashboard/plugin');
const Dashboard = require('webpack-dashboard');

const dashboard = new Dashboard();


module.exports = {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  devtool: 'inline-source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      // js
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // scss
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader', // 将 Sass 编译成 CSS
        }],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new DashboardPlugin(dashboard.setData),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
};
