
const fs = require('fs'); 

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) =>{
    if(err)
        throw err;
    else{
        
        let index = 0;
        let newLine = 0;
        
        while(index < data.length){
            if(data[index] == '\n'){
                newLine++;
            }
            index++;
        }
        console.log(newLine);
    }
});

