import Component from '../components/core/Component';
import Sub_Top4 from '../components/Sub_Top4';
import Top12 from '../components/Top12';
import Post from '../components/Post';

import '../css/sub_top4.css';
import '../css/top12.css';

class Home extends Component {

    init() {
        const category = ['라이프', '푸드', '여행', '컬처'];
        this._state = { category: category }; // 4-2. state를 받아준 상태값으로 초기화 해줌
    }

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
        const category = this._state.category;

        category.forEach(cate => {
            const divEl = document.createElement('div');
            const div =  sub_top4.appendChild(divEl);
            new Sub_Top4(div, {category: cate}); // 카테고리 별로 탑4를 뽑아줌
        })
        
        new Top12(top12);
    }

    setEvent() {
        this.getPost('#sub_top4'); // post 카드를 눌렀을 때 페이지 요청
        this.getPost('#top12');
    }

    getPost(className) { // post 카드를 눌렀을 때 페이지 요청
        const posts = this._target.querySelector(className);
        if (posts !== null) {
            posts.addEventListener('click', (e) => {
                if (e.target.classList.contains('post-link')) {
                    if (e.target.classList.contains('post-idx')) {
                        new Post(document.getElementById('contents'), {idx: e.target.dataset.idx});
                    } else {
                        new Post(document.getElementById('contents'), {idx: e.target.parentElement.dataset.idx});
                    }
                }
            });
        }
    }

}

export default Home;