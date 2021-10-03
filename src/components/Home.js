import Component from './core/Component';
import Header from './common/Header';
import Sub_Top4 from './home/Sub_Top4';

import '../css/home.css';
import '../css/header.css';
import '../css/sub_top4.css';
import '../css/top12.css';
import Top12 from './home/Top12';

class Home extends Component {

    template() {
        const { title, description } = this._state;
        return `
        <div id='header'></div>
    
        <div id="contents">
            <div id='sub_top4'>
            </div>

            <div id="top12"></div>
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
        const top12 = this._target.querySelector('#top12');
        const category = ['life', 'food', 'travel', 'culture'];

        new Header(header);
        new Sub_Top4(sub_top4, {category: category});
        new Top12(top12);
    }

}

export default Home;