// require("babel-register")
// require("/server.js")
// require("babel-runtime/regenerator")
// require("webpack-hot-middleware/client?reload=true")
// require('./index.html')
import './css/index.css';
import Home from './components/Home.js';


const app = document.getElementById('app');
const home = new Home(app, {title: "Hello", description: "World"});