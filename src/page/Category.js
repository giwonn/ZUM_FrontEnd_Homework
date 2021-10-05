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

    mounted() {
        const list = this._target.querySelector('category-list > ul');

        const li_el = createElement('li');

        const li = list.appendChild(li_el);

        for (let i=0; i<12; i++) {
            new Post_Thumb(li);
        }
    }
}

export default Category;