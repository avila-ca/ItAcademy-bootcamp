var net = require('node:net');
var client = net.Socket();
client.connect('3000', 'localhost', function () {
    console.log('connected');
});
client.on('data', function (chunk) {
    console.log(chunk.toString());
});
client.on('end', function () {
    console.log('Disconnected: Bye!');
});
client.on('error', function (err) {
    console.log('Error... ' + err.message);
});
