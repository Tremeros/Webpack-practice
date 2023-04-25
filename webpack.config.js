const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: {
        path: path.resolve(__dirname, "docs")
      },
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
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