
const api = (app) => {
    const reqJson = (req) => {
        const category = req.params.category;
        let data = [];
        try {
            data = res.json(require(`../api/content/${category}.json`));
        } catch (err) {
            console.log(err);
        }
        return RankingContent;
    }
    
    app.get('/api/best', (req, res) => res.json(require('../api/best/ranking.json')));

    app.get('/api/content/:category', (req, res) => {
        const category = req.params.category;
        let RankingContent = [];
        try {
            RankingContent = res.json(require(`../api/content/${category}.json`));
        } catch (err) {
            console.log(err);
        }
        return RankingContent;
    });
    // ㅅㅏㅇㅅㅔㅍㅣㅇㅣㅈㅣ ㄷㅔㅇㅣㅌㅓ ㅈㅗㅁ ㅇㅣㅅㅏㅇㅎㅏㅁ
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
    // app.get('/api/best', (req, res) => res.json(require('./ranking.json')));
};


module.exports = api;