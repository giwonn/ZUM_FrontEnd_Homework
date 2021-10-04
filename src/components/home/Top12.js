import Component from '../core/Component.js';

class Top12 extends Component {

    async template() {
        const content = await fetch(`${this._url}/api/best`).then(resp => resp.json());
        let ul = `
        <h3 class='top_title'>실시간 TOP 12</h3>
        <div>
            <ul>
        `;

        for (let i=0; i<=11; i++) {
            ul += `
                <li>
                    <a href='#'>
                        <span>${i+1}</span>
                        <span class='sub_title'>${content[i].title}</span>
                        <span class='sub_content'>${content[i].mediaName}</span>
                    </a>
                </li>
            `;
        }
        ul += '</ul></div>';
        return ul;
    }
}

export default Top12;