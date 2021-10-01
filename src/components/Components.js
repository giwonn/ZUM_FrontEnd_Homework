class Component {
    state;
    div;

    constructor(querySelector, newState) {
        this.div = querySelector;
        this.setState(newState);
    }
    
    render(state) { // 상속받아 렌더링 될 템플릿을 구현해줘야함
        throw new Error('render() must be implement');
    }; 

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render(this.state);
    };
}

export default Component;