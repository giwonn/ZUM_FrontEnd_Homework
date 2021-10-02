import Component from "../core/Component";

class Top4 extends Component {
    template() {
        const { cnt } = this._state;
        return `
            <ul class="sublist" data-value='${cnt}'>
            </ul>
        `;
    }
}