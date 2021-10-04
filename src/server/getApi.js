const e = require('express');
const playwright = require('playwright');
const chromium = playwright.chromium;

const getApi = (app) => {
    const getList = (filePath) => {
        let data = [];
        try {
            data = require(filePath);
        } catch (err) {
            console.log('데이터를 불러오지 못했습니다.');
        }
        return data;
    }
    
    // 랭킹 리스트 호출
    app.get('/api/best', (req, resp) => resp.json(getList('../api/best/ranking.json')));
    
    // 카테고리 리스트 호출
    app.get('/api/content/:category', (req, resp) => resp.json(getList(`../api/content/${req.params.category}.json`)));
    
    // 상세페이지 api 구현해야함 (미완성)
    app.get('/api/detail/:url', async (req, resp) => {
        const url = req.params.url;
        let contents = {};

        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto(`https://hub.zum.com/post/${url}`);

        const post = await page.$$('.d_container');

        for (let element of post) {
            const article_header = await element.$('.article_header');
            const d_article = await element.$('.d_article');
            
            const title = await article_header.innerHTML();
            const content = await d_article.innerHTML();

            contents.title = title;
            contents.content = content;
        }

        await browser.close();
        
        return resp.send(contents);
    });
};


module.exports = getApi;