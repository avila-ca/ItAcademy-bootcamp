const mymodule = require('./mymodule');


const dirPath = process.argv[2];
const ext = process.argv[3];

const callback = (err:string, data:string[]) =>{
    if (err)
        console.error('We have some problems');
    data.map((value:string, index:number) =>{
        console.log(value);
        
    })
        
}
mymodule(dirPath, ext, callback);