const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

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
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/main_360.html"),
      location: "main_tab",
      template_filename: ["index.html"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/contacts_tab.html"),
      location: "contacts_tab",
      template_filename: ["index.html"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/sub_accounts_tab.html"),
      location: "sub_account_tab",
      template_filename: ["index.html"],
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
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // {
                //   debug: true,
                //   modules: false, // defaults to auto
                // },
                {
                  debug: true,
                  useBuiltIns: "usage",
                  corejs: "3.0.0",
                },
              ],
            ],
          },
        },
      },
    ],
  },
});
