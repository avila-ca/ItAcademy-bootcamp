const fs = require('node:fs'); 

let file = process.argv[2] || '../archivo.txt';

const buff:string = fs.readFileSync(file, 'utf-8');

function myFirst(buff:string){
    
    let index = 0;
    let newLine = 0;
    
    while(index < buff.length){
        if(buff[index] == '\n'){
            newLine++;
        }
        index++;
    }
    return newLine;
}

const total = myFirst(buff);
console.log(total);


