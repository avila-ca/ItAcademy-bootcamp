var fs = require('node:fs');
var path = require('node:path');
module.exports = function mymodule(dirPath, ext, callback) {
    var arrFiles = [];
    fs.readdir(dirPath, function (err, data) {
        if (err) {
            return callback(err, null);
        }
        else {
            for (var index = 0; index < data.length; index++) {
                var file = path.extname(data[index]);
                if (file == '.' + ext) {
                    arrFiles.push(data[index]);
                }
            }
            callback(null, arrFiles);
        }
    });
};
