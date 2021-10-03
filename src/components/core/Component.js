export default class Component {
    // protected : _변수
    // private : #변수
    _state; // 상태 (바뀌는 부분)
    _target; // 적용할 html 코드

    constructor(target, state) { // 1. element, state, props를 받아서
        this._target = target;       // 2. target에 해당 element를 담아줌
        this.setState(state);           // 3-1. setState로 받아준 상태값을 넘겨주고
        this.setEvent();                   // event 세팅은 첫 초기화 때 딱 한번만 이루어짐
    }

    template() { // 템플릿 리턴해줌
        return '';
    }
    mounted() {} // 만들어진 html에 자식 component를 마운트 해줌

    async render() { // 해당 Component를 렌더링해줌
        this._target.innerHTML = await this.template();
        this.mounted();
    }

    // event 제어 함수 (필요할 때만 구현함)
    setEvent() {} 

    // state가 변경되면 변경 된 값으로 새로 렌더링함
    setState(newState) {
        this._state = { ...this._state, ...newState }; // 3-2. state를 받아준 상태값으로 초기화 해줌
        this.template();
        this.render(this._state);                     
    }
}