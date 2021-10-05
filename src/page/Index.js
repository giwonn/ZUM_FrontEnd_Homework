import Component from '../components/core/Component';
import Header from '../components/common/Header';
import Home from './Home';

import '../css/home.css';
import '../css/header.css';

class Index extends Component {

    template() {
        return `
        <div id='header'></div>
    
        <div id="contents"></div>
        `;
    }

    async mounted() {
        const header = this._target.querySelector('#header');
        const contents = this._target.querySelector('#contents');

        new Header(header);
        new Home(contents);
    }


}

export default Index;