var fs = require('node:fs');
var http = require('node:http');
var map = require('through2-map');
var portNumber = +process.argv[2];
var server = http.createServer(function (req, res) {
    req.on('data', function (chunk) {
        console.log('\nReceived from client:  ' + chunk);
    });
    if (req.method == 'POST') {
        res.writeHeader(200, { 'Content-Type': 'text/plain' });
        var data = req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        }));
        data.pipe(res);
    }
    else
        res.end('Error: No POST method');
});
server.listen(portNumber);
