import './css/index.css';
import Home from './components/Home.js';


const app = document.getElementById('app');
new Home(app);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    renderApp = require('./index.js');
  });
}