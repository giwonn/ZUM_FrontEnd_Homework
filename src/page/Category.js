import Component from '/src/components/core/Component';
import Post_Thumb from '/src/components/Post_Thumb';

class Category extends Component {

    template() {
        return `
        <div class='banner'>
        </div>
        <div class='category-list'>
            <ul>
            </ul>
        </div>
        `;
    }

    async renderChildren() {
        const list = this._target.querySelector('.category-list > ul');
        const content = await fetch(`${this._url}/api/content/${this._props.category}`).then(resp => resp.json());

        

        for (let i=0; i<12; i++) {
            const li_el = document.createElement('li');
            const li = list.appendChild(li_el);

            new Post_Thumb(li, {content: content[i]});
        }
    }
}

export default Category;