import Component from './core/Component.js';

class Template extends Component {

    render({ title, description }) {
        this._target.innerHTML = `
            <h1 class='title'>${title}</h1>
            <p>${description}</p>
        `;
    };

    setEvent() {
        this._target.querySelector('.title').addEventListener('click', (e) => {
            alert("이벤트 발생");
        });
    }

}

export default Template;