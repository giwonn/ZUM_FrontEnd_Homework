// express 설정
const express = require("express");
const path = require("path");
const app = express();

// webpack middleware 설정
const middleware = require('webpack-dev-middleware'); // webpack 미들웨어 사용

// webpack.config.js 가져옴
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const port = 3000;


app.get('/', (req, res, next) => { // bundle된 index.html을 '/' 주소로 요청
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// express(app)가 webpack(compiler)을 사용하게 함
app.use(middleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));


// 확인 로그
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});