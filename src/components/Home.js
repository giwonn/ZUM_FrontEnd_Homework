import Component from './core/Component';
import Header from './common/Header';
import Sub_Top4 from './home/Sub_Top4';

class Home extends Component {

    template() {
        const { title, description } = this._state;
        return `
        <div id='header'></div>
    
        <div id="contents">
            <div id='sub_top4'>
            </div>

            <div id="top12"></div>

            <h1 class='title'>${title}</h1>
            <p>${description}</p>
        </div>
        `;
    }

    setEvent() {
        this._target.querySelector('.title').addEventListener('click', (e) => {
            alert("이벤트 발생");
        });
    }

    async mounted() {
        const header = this._target.querySelector('#header');
        const sub_top4 = this._target.querySelector('#sub_top4');
        const category = ['life', 'food', 'travel', 'culture'];

        new Header(header);
        new Sub_Top4(sub_top4, {category: category});
    }

}

export default Home;