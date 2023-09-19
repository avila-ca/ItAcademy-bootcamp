const fs = require('node:fs');
const http = require('node:http');
const portNumber = +process.argv[2];
const pathFile = process.argv[3];
const server = http.createServer();

server.on('request', function (req, res) {

    req.on('error', function (err) {
        console.error(err.stack);
    });
    res.on('error', function (err) {
        console.error(err.stack);
    });

    const reader = fs.createReadStream(pathFile);
    let data = '';

    reader.on('data', function (chunk) {
        data += chunk;
        console.log('\n' + data.toString());
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(pathFile).pipe(res);
    
}).on('error', function (err) {
    console.error('Error: ' + err.message);
});

server.listen(portNumber);