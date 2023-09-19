var http = require('http');
var postData = JSON.stringify({
    'msg': 'Hello World!'
});
var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain'
    }
};
var req = http.request(options, function (res) {
    /* console.log(`STATUS: ${res.statusCode}`);
     console.log(`HEADERS: ${JSON.stringify(res.headers)}`); */
    res.setEncoding('utf8');
    res.on('error', function (err) {
        console.log('Error in client side: ' + err.message);
    });
    res.on('data', function (chunk) {
        console.log("\nReturned to the client: ".concat(chunk, "\n"));
    });
    res.on('end', function () {
        console.log('No more data in response.');
    });
});
req.on('error', function (e) {
    console.error("problem with request: ".concat(e.message));
});
req.write('pruebas');
req.end();
