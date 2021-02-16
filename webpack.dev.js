const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        //1. css-loader will run to convert css to javascript
        //2. style loader will run to inject the css to dom
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
