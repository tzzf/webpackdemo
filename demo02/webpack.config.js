var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    app: "./src/index.js"
  },
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  // externals: 'jQuery',
  externals: {
    'jquery312': '$'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      // chunks: ["app"], // entry中的app入口才会被打包
    })
  ]
};
