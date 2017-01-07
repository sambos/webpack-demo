var config = require("./webpack.config.js");

config.devServer = {
  port: 3033,
  contentBase: __dirname,
  inline: true
};
config.output.publicPath = "/";
config.devtool = "eval";

module.exports = config;
