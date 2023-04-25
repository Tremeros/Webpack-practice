const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "source", "index.html")
        })
      ]
  };