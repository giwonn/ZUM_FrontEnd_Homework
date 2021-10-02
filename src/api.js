
const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

export const get = (url) => {
    server.get(url, (req, res) => {
        switch(url) {
            case '/api/best':
                return require('./api/ranking.json');
        }
        
    });
}
