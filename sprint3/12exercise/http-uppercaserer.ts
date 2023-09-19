
const fs = require('node:fs');
const http = require('node:http');
const map = require('through2-map');
const portNumber:number = + process.argv[2];


const server = http.createServer((req,res) => {
    req.on('data', (chunk) => {
        console.log('\nReceived from client:  '+ chunk);
        
    })
    if (req.method == 'POST') {
        res.writeHeader(200, {'Content-Type':'text/plain'})
        let data = req.pipe(map((chunk) => {
                       
             return chunk.toString().toUpperCase();
        }))
        data.pipe(res)
        
    } else
        res.end('Error: No POST method');
});


server.listen(portNumber);