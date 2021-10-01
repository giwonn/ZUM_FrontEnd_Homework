import Component from './Components.js';

class Template extends Component {

    render({ title, description }) {
        this.div.innerHTML = `
            <h1>${title}</h1>
            <p>${description}</p>
        `;
    };
}

export default Template;