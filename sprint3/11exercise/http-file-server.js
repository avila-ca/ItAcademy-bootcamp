var fs = require('node:fs');
var http = require('node:http');
var portNumber = +process.argv[2];
var pathFile = process.argv[3];
var server = http.createServer();
server.on('request', function (req, res) {
    req.on('error', function (err) {
        console.error(err.stack);
    });
    res.on('error', function (err) {
        console.error(err.stack);
    });
    var reader = fs.createReadStream(pathFile);
    var data = '';
    reader.on('data', function (chunk) {
        data += chunk;
        console.log('\n' + data.toString());
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(pathFile).pipe(res);
}).on('error', function (err) {
    console.error('Error: ' + err.message);
});
server.on('connection', function (data) {
});
server.listen(portNumber, function (data) {
});
