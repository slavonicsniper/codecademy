const http = require('http'), process = require('process');

const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        console.log(data);
    });
    res.on('error', (e) => {
        console.error(e);
    });
}).on('error', (e) => {
    console.error(e);
});