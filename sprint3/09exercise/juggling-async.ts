const http = require('node:http');
const bl = require('bl');

let arr:string[] = [];
let count:number = 0;

function putInfo(){
    for (let index = 0; index < 3; index++) {
        console.log(arr[index]);
    }
}

for (let index = 0; index < 3; index++) {
    
    http.get(process.argv[2 + index], (res) => {
        res.setEncoding('utf8');
        res.pipe(bl((err, data) => {
            if (err)
                console.error(err.message);
            arr[index] = data.toString();
            count++;
            if(count === 3)
                putInfo();
        }))

    }).on('error', (err) => {
        console.log("Error: " + err.messag);
        
    })
}
