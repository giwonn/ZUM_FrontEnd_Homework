import Component from './core/Component';
import Header from './common/Header';

class Home extends Component {

    template() {
        const { title, description } = this._state;
        return `
        <div id='header'></div>
    
        <div id='sub_top4'>
        </div>

        <div id="top12"></div>

        <h1 class='title'>${title}</h1>
        <p>${description}</p>
        `;
    }

    setEvent() {
        this._target.querySelector('.title').addEventListener('click', (e) => {
            alert("이벤트 발생");
        });
    }

    mounted() {
        const header = this._target.querySelector('#header');

        new Header(header);
    }

}

export default Home;