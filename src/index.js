import './css/index.css';
import Home from './components/Home.js';


const app = document.getElementById('app');
const home = new Home(app, {title: "Hello", description: "World"});