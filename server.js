// express 설정
const express = require("express");
const server = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const webpackDevMidddleware = require('webpack-dev-middleware'); // webpack 미들웨어 사용
const webpackHotMiddleware = require('webpack-hot-middleware')

const path = require("path");
const port = 3000;


// '/' 요청이 들어오면 public/index.html로 연결해줌
server.get('/', (req, res, next) => { 
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// express(server)가 webpack(compiler)을 사용하게 함
server.use(webpackDevMidddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
// server.use(webpackHotMiddleware(compiler));
// 확인 로그
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});