const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(css)$/, use: [ "style-loader", "css-loader" ] },
      { test: /\.(png|jpe?g|gif)$/i, use: "file-loader" }
    ]
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "app/index.html"
    })
  ]
}