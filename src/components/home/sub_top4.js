import Component from "../core/Component";
import Post from "../Post";

// 카테고리별 TOP4 리스트 출력
class Sub_Top4 extends Component {

    init() {
        const category = ["life", 'food', 'travel', 'culture'];
        this._state = { ...this._state, ...{category: category} };
    }

    async render_ul(category) {
        const map = {"culture": "컬처", "food": "푸드", 'life': '라이프', 'travel': '여행'};
        const content = await fetch(`${this._url}/api/content/${category}`).then(resp => resp.json());
        let ul = `
        <ul class='posts'>
            <h3 class='category_name'>#${map[category]}</h3>
        `;

        for (let i=0; i<4; i++) {
            ul += `
                <li class='post'>
                    <div class="post-idx post-link" data-idx='${content[i].idx}'>
                        <img class='sub_thumbnail post-link' src='${content[i].imageUrl}'>
                        <div class='sub_title post-link'>${content[i].title}</div>
                        <div class='sub_content post-link'>${content[i].summaryContent}</div>
                    </div>
                    <div class="sub_writer">by ${content[i].mediaName}</div>
                </li>
            `;
        }
        ul += '</ul>';
        return ul;
    }

    async template() {
        const posts_wrap = `
        <div class='posts-wrap'>
            ${await Promise.all(this._state.category.map(cate => this.render_ul(cate)))}
        </div>`;

        return posts_wrap;
    }

    setEvent() {
        const posts = this._target.querySelector('.posts-wrap');
        if (posts !== null) {
            posts.addEventListener('click', (e) => {
                if (e.target.classList.contains('post-link')) { // post-link라는 class를 가지고 있으면
                    let idx = '';
                    if (e.target.parentElement.classList.contains('.post-idx')) {
                        idx = e.target.dataset.idx;
                    } else {
                        idx = e.target.parentElement.dataset.idx;
                    }
                    new Post(document.getElementById('contents'), {idx: idx}); // 해당 페이지 요청
                }
            })
        }
    }
}

export default Sub_Top4;