const http = require('node:http');
const url = require('node:url');
const portNumber:number = +process.argv[2] ;

const server = http.createServer((req,res) => {
    const parsed = url.parse(req.url, true)
    
    if (req.method == 'GET' && parsed.pathname == '/api/parsetime') {
        
        const date = parsed.query.iso;
        const time = new Date(date)
        const obj = {hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() }
       console.log('\nThe time received in the server side:\n' + time.toISOString());
       
        res.writeHeader(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(obj));
    }
    else if(req.method == 'GET' && parsed.pathname == '/api/unixtime'){
        const date = parsed.query.iso;
        const time = new Date(date)
        const obj = {unixtime: time.getTime()}        
        console.log('\nThe time received in the server side:\n' + date);

        res.writeHeader(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(obj));
    }
});

server.listen(portNumber);