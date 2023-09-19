"use strict";
exports.__esModule = true;
exports.sum = void 0;
var args = process.argv;
function sum(args) {
    var index = 2;
    var sumargs = 0;
    while (index < args.length) {
        sumargs += +args[index];
        index++;
    }
    return sumargs;
}
exports.sum = sum;
var total = sum(args);
console.log(total);
