import './style.css';
import Template from './components/Template.js';

const app = document.getElementById('app');
const template = new Template(app);
template.setState({title : "Hello", description: "World"});