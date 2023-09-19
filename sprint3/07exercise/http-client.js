var http = require('node:http');
var url = process.argv[2];
http.get(url, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
}).on('error', function (err) {
    console.log("Error: " + err.message);
});
