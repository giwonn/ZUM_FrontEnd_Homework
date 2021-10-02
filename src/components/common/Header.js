import Component from '/src/components/core/Component.js';
import zum from '/src/image/logo_zum.png';
import hub from '/src/image/logo_hub.png';
import '/src/css/header.css';

class Header extends Component {

    template() {
        const category = ['HOME', '라이프', '푸드', '여행', '컬쳐', '즐겨찾기'];
        return `
        <img class="logo" src="${zum}">
        <img class="logo" src="${hub}">
        <div class="navi">
            <ul>
                ${category.map((item, count) => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        `;
    }

}

export default Header;