import Component from "../core/Component";

class Sub_Top4 extends Component {
    async render_ul(category) {
        const map = {"culture": "컬처", "food": "푸드", 'life': '라이프', 'travel': '여행'};
        const content = await fetch(`${this._url}/api/content/${category}`).then(resp => resp.json());
        let ul = `
        <ul>
            <h3 class='sub_name'>#${map[category]}</h3>
        `;

        for (let i=0; i<4; i++) {
            ul += `
                <li>
                    <a href='#'>
                        <img src='${content[i].imageUrl}'>
                        <div class='sub_title'>${content[i].title}</div>
                        <div class='sub_content'>${content[i].summaryContent}</div>
                    </a>
                    <div class="sub_writer">by ${content[i].mediaName}</div>
                </li>
            `;
        }
        ul += '</ul>';
        return ul;
    }

    async template() {
        const { category } = this._state; // category = [culture, food, life, ...]
        const ul = await Promise.all(category.map(cate => this.render_ul(cate)));

        return ul.join('');
    }
}

export default Sub_Top4;