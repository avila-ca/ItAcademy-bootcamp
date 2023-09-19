var http = require('http');
var d = new Date();
var options = {
    hostname: 'localhost',
    port: 3000,
    path: "/api/unixtime?iso=".concat(d.toISOString()),
    method: 'GET'
};
var req = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log("\nResponse from server to the client side:\n ".concat(data));
    });
});
req.on('error', function (error) {
    console.error("Error en la solicitud: ".concat(error.message));
});
req.end();
