const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|gif)$/i, use: "file-loader" },
      { test: /\.svg$/i, use: ["@svgr/webpack"] },
    ],
  },
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      template: "app/index.html",
    }),
  ],
};
