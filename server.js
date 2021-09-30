// express 설정
const express = require("express");
const path = require("path");
const server = express();

// webpack middleware 설정
const middleware = require('webpack-dev-middleware'); // webpack 미들웨어 사용

// webpack.config.js 가져옴
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const port = 3000;

// '/' 요청이 들어오면 public/index.html로 연결해줌
server.get('/', (req, res, next) => { 
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// express(server)가 webpack(compiler)을 사용하게 함
server.use(middleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));


// 확인 로그
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});