const http = require('http'), process = require('process');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

const returnContentFrom3URLS = () => {
    for(let url of urls) {
        http.get(url, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (data) => {
                rawData += data;
            });
            res.on('end', () => {
                console.log(rawData);
            });
            res.on('error', (e) => {
                console.error(e);
            });
        }).on('error', (e) => {
            console.error(e);
        });
    };
};

returnContentFrom3URLS();