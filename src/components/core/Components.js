class Component {
    // protected : _변수
    // private : #변수
    _state; // 상태 (바뀌는 부분)
    _target; // 적용할 html 코드

    constructor(querySelector, newState=undefined) { // 1. DOM, 상태값을 받아서
        this._target = querySelector;       // 2. target에 해당 DOM을 담아줌
        this.setState(newState);           // 3-1. setState로 받아준 상태값을 넘겨주고
        this.setEvent();                   // event 세팅은 첫 초기화 때 딱 한번만 이루어짐
    }

    // 렌더링할 html을 return 해줌 (상속받아서 구현 필수)!
    render(_state) {
        throw new Error('render() must be implement');
    }

    // event 제어 함수 (필요할 때만 구현함)
    setEvent() {} 

    // state가 변경되면 변경 된 값으로 새로 렌더링함
    setState(newState) {
        this._state = { ...this._state, ...newState }; // 3-2. state를 받아준 상태값으로 초기화 해줌
        this.render(this._state);                     
    }
}

export default Component;