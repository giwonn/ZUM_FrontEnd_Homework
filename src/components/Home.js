import Component from './core/Component';
import Sub_Top4 from './home/Sub_Top4';
import Top12 from './home/Top12';

import '../css/sub_top4.css';
import '../css/top12.css';

class Home extends Component {

    template() {
        return `
            <div id='sub_top4'>
            </div>

            <div id="top12"></div>
        `;
    }

    async mounted() {
        const sub_top4 = this._target.querySelector('#sub_top4');
        const top12 = this._target.querySelector('#top12');

        new Sub_Top4(sub_top4); // 카테고리 별로 탑4를 뽑아줌
        new Top12(top12);
    }

}

export default Home;