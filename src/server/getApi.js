
const getApi = (app) => {
    const getList = (filePath) => {
        let data = [];
        try {
            data = require(filePath);
        } catch (err) {
            alert('데이터를 불러오지 못했습니다.');
        }
        return data;
    }
    
    // 랭킹 리스트 호출
    app.get('/api/best', (req, res) => res.json(getList('../api/best/ranking.json')));
    
    // 카테고리 리스트 호출
    app.get('/api/content/:category', (req, res) => res.json(getList(`../api/content/${req.params.category}.json`)));
    
    // 상세페이지 api 구현해야함 (미완성)
    app.get('/api/content/:category/:idx', (req, res) => {
        const category = req.params.category;
        const idx = req.params.idx;
        let HubContent = [];
        try {
            HubContent = res.json(require(`../api/content/${category}.json`));
        } catch (err) {
            console.log(err);
        }
        return data;
    });
};


module.exports = getApi;