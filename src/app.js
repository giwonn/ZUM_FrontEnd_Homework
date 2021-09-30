import './style.css';

let state = { title: 'title', description: 'description' };
const $app = document.querySelector('#app');

const render = ({ title, description }) => {
  $app.innerHTML = `
    <h1>${title}</h1>
	<p>${description}</p>
  `;
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render(state);
};

render(state);
setState({ title: 'Hello ' });
setState({ description: 'World ' });