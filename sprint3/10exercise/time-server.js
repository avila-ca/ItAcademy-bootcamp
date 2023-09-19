var net = require('node:net');
var portNumber = +process.argv[2];
var date = new Date;
var currentDate = function () {
    var hour = '';
    var minute = '';
    var day = '';
    var month = '';
    if (Number(date.getMonth()) + 1 < 10)
        month = '0' + (Number(date.getMonth()) + 1).toString();
    else
        month = date.getMonth().toString();
    if (date.getDate() < 10)
        day = '0' + date.getDate();
    else
        day = date.getDate().toString();
    if (date.getHours() < 10)
        hour = '0' + date.getHours();
    else
        hour = date.getHours().toString();
    if (date.getMinutes() < 10)
        minute = '0' + date.getMinutes();
    else
        minute = date.getMinutes().toString();
    var timeNow = "".concat(date.getFullYear(), "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, "\n");
    return timeNow;
};
var server = net.createServer(function (socket) {
    socket.end(currentDate());
    socket.on("error", function (error) {
        console.log("Server Error: ".concat(error.message));
    });
});
server.listen(portNumber);
