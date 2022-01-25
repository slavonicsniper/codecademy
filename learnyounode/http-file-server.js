const http = require('http'), process = require('process'), fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(file);
    stream.on('open', () => {
        stream.pipe(response);
    });
    stream.on('error', err => {
        response.end(err);
    });
});
server.listen(port);