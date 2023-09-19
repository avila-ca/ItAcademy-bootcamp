var http = require('node:http');
var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain'
    }
};
//setTimeout(() =>{
var req = http.request(options, function (res) {
    res.on('error', function (err) {
        console.log('Error client: ' + err.message);
    });
    res.on('data', function (chunk) {
        console.log('\n\nResponse to the client side: \n\n' + chunk.toString());
    });
    res.on('end', function () {
        console.log('Disconnected: bye');
    });
});
req.on('error', function (err) {
    console.log('Error client... ' + err.message);
});
req.on('connection', function () {
    console.log('connected');
});
req.end();
//}, 2000)
