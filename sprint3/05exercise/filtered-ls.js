var fs = require('fs');
var path = require('node:path');
var filePath = process.argv[2];
var ext = process.argv[3];
fs.readdir(filePath, function (err, files) {
    if (err) {
        throw err;
    }
    else {
        for (var index = 0; index < files.length; index++) {
            var file = path.extname(files[index]).slice(1, 6);
            //console.log(file);
            if (file == ext) {
                console.log(files[index]);
            }
        }
    }
});
