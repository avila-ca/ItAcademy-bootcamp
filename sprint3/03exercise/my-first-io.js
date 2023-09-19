var fs = require('node:fs');
var file = process.argv[2] || '../archivo.txt';
var buff = fs.readFileSync(file, 'utf-8');
function myFirst(buff) {
    var index = 0;
    var newLine = 0;
    while (index < buff.length) {
        if (buff[index] == '\n') {
            newLine++;
        }
        index++;
    }
    return newLine;
}
var total = myFirst(buff);
console.log(total);
