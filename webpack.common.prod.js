const path = require("path");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/main_360.html"),
      location: "main_tab",
      template_filename: ["index-[contenthash].html"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/contacts_tab.html"),
      location: "contacts_tab",
      template_filename: ["index-[contenthash].html"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/sub_accounts_tab.html"),
      location: "sub_account_tab",
      template_filename: ["index-[contenthash].html"],
    }),
  ],
};
