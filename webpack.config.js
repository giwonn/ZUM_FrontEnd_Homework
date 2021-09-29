const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map", // 개발자 모드에서 원본 코드처럼 볼 수 있음
  entry: "./src/index.js",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "http://localhost:3000/public" // 미들웨어 장소
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // html 파일도 같이 bundle
    }),
    new MiniCssExtractPlugin({ // style 태그 대신 css 파일도 함께 bundle
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
  ],
};