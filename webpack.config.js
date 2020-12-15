const path = require("path");

module.exports = {
  entry: [
    `${__dirname}/src/public/js/app.js`,
    `${__dirname}/src/public/scss/main.scss`,
  ],
  output: {
    path: path.resolve(__dirname, "src/public/dist"),
    filename: "js/app.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].min.css" },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
