const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const { pathname, searchParams} = new URL(req.url, `http://${req.headers.host}`);
    if(pathname === '/api/parsetime') {
        const d = new Date(searchParams.get('iso'));
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            hour: h,
            minute: m,
            second: s
        }));
    } else if(pathname === '/api/unixtime') {
        const u = new Date(searchParams.get('iso')).getTime();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            unixtime: u
        }));
    }
});

server.listen(port);