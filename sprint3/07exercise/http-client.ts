const http = require('node:http');

const url = process.argv[2];

http.get(url, (res) =>{ 

   res.setEncoding('utf8');
    res.on('data', (chunk) =>{
        console.log(chunk);
        
    });
}).on('error', (err) =>{
    console.log("Error: " + err.message);
});