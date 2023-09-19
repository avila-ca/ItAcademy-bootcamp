var mymodule = require('./mymodule');
var dirPath = process.argv[2];
var ext = process.argv[3];
var callback = function (err, data) {
    if (err)
        console.error('We have some problems');
    data.map(function (value, index) {
        console.log(value);
    });
};
mymodule(dirPath, ext, callback);
