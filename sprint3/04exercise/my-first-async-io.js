var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf8', function (err, data) {
    if (err)
        throw err;
    else {
        var index = 0;
        var newLine = 0;
        while (index < data.length) {
            if (data[index] == '\n') {
                newLine++;
            }
            index++;
        }
        console.log(newLine);
    }
});
