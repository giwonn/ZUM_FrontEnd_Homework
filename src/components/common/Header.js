import Component from '/src/components/core/Component.js';
import zum from '/src/image/logo_zum.png';
import hub from '/src/image/logo_hub.png';
import '/src/css/header.css';

class Header extends Component {

    template() {
        return `
        <img class="logo" src="${zum}">
        <img class="logo" src="${hub}">
        `;
    }

}

export default Header;