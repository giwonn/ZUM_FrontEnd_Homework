import Component from "../core/Component";

class Sub_Top4 extends Component {
    async render_ul(category, idx) {
        const content = await fetch(`http://localhost:3000/api/content/${category}`).then(resp => resp.json());
        let ul = `<ul data-idx=${idx}>`;

        for (let i=0; i<4; i++) {
            ul += `
            <li>
                <img src='${content[i].imageUrl}'>
                <p>${content[i].title}</p>
                <p>${content[i].summaryContent}</p>
                <p>${content[i].mediaName}</p>
            </li>
            `;
        }
        ul += '</ul>';
        return ul;
    }

    async template() {
        const { category } = this._state;
        const ul = await Promise.all(category.map((cate, idx) => this.render_ul(cate, idx)));
        
        return ul.join('');
    }
}

export default Sub_Top4;