var http = require('node:http');
var bl = require('bl');
var arr = [];
var count = 0;
function putInfo() {
    for (var index = 0; index < 3; index++) {
        console.log(arr[index]);
    }
}
var _loop_1 = function (index) {
    http.get(process.argv[2 + index], function (res) {
        var data = '';
        res.setEncoding('utf8');
        res.pipe(bl(function (err, data) {
            if (err)
                console.error(err.message);
            arr[index] = data.toString();
            count++;
            if (count === 3)
                putInfo();
        }));
    }).on('error', function (err) {
        console.log("Error: " + err.messag);
    });
};
for (var index = 0; index < 3; index++) {
    _loop_1(index);
}
