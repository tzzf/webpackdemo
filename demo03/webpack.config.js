var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css",
      // chunkFilename: "css/[name].[hash:6].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["app"], // entry中的app入口才会被打包
    }),
  ]
};
