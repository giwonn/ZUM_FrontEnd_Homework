import './css/index.css';
import Index from './page/Index.js';

const app = document.getElementById('app');
new Index(app);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    renderApp = require('./index.js');
  });
}