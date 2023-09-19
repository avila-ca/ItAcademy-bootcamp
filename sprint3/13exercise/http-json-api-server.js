var http = require('node:http');
var url = require('node:url');
var portNumber = +process.argv[2];
var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url, true);
    if (req.method == 'GET' && parsed.pathname == '/api/parsetime') {
        var date = parsed.query.iso;
        var time = new Date(date);
        var obj = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
        console.log('\nThe time received in the server side:\n' + time.toISOString());
        res.writeHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    }
    else if (req.method == 'GET' && parsed.pathname == '/api/unixtime') {
        var date = parsed.query.iso;
        var time = new Date(date);
        var obj = { unixtime: time.getTime() };
        console.log('\nThe time received in the server side:\n' + date);
        res.writeHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    }
});
server.listen(portNumber);
