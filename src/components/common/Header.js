import Component from '/src/components/core/Component.js';
import Category from '/src/page/Category.js';
import zum from '/src/image/logo_zum.png';
import hub from '/src/image/logo_hub.png';
import '/src/css/header.css';

class Header extends Component {

    template() {
        const category = ['HOME', '라이프', '푸드', '여행', '컬쳐', '즐겨찾기'];
        const menu = {'HOME':'HOME', '라이프': 'life', '푸드': 'food', '여행': 'travel', '컬쳐': 'culture', '즐겨찾기': 'favorite'};
        
        return `
        <div id="logo">
            <img class="header_logo" src="${zum}">
            <img class="header_logo" src="${hub}">
        </div>
        <div class="navi">
            <ul>
                ${category.map(item => `<li class='menu' data-cate='${menu[item]}'>${item}</li>`).join('')}
            </ul>
        </div>
        `;
    }

    setEvent() {
        const menu = {'HOME':'home', '라이프': 'life', '푸드': 'food', '여행': 'travel', '컬쳐': 'culture', '즐겨찾기': 'favorite'};
        const navi = this._target.querySelector('.navi');
        const contents = this._target.parentElement.querySelector('#contents');
        navi.addEventListener('click', (e) => {
            if(e.target.classList.contains('menu')) {
                switch(e.target.classList) {
                    case 'home':
                        new Home(content);
                        break;
                    case 'favorite':
                        break;
                    default:
                        new Category(contents, {category: e.target.dataset.cate});
                }
            }
        });
    }

}

export default Header;