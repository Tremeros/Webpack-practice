const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "source", "index.html")
        })
      ]
  };