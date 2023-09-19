const fs = require('fs');
const path = require('node:path');

const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, (err, files) =>{
    if (err) {
        throw err;
    }else{
        for (let index = 0; index < files.length; index++) {
            let file = path.extname(files[index]).slice(1, 6)
            //console.log(file);
            
            if(file == ext){
                console.log(files[index]);
            }
        }        
    }
})