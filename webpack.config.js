module.exports = {
  entry: "./index.js",
  output: {
    path: ".",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }]
  }
};
