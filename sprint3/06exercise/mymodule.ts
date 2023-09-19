const fs = require('node:fs');
const path = require('node:path');


module.exports = function mymodule(dirPath:string, ext:string, callback:Function) {
    let arrFiles:string[] = [];
    fs.readdir(dirPath, (err, data) => {
        if (err) {
            return callback(err, null);
        }else{
            for (let index = 0; index < data.length; index++) {
                let file = path.extname(data[index]);               
                if(file == '.' + ext){
                    arrFiles.push(data[index]);
                }
            }        
            callback(null, arrFiles); 
        }
    });
}