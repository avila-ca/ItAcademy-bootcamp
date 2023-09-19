const http = require('node:http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
  };
//setTimeout(() =>{
const req = http.request(options, (res) => {
    res.on('error', (err) => {
        console.log('Error client: ' +err.message);
        
    })
    res.on('data', (chunk) => {
        console.log('\n\nResponse to the client side: \n\n'+chunk.toString());
        
    })
    res.on('end',() => {
        console.log('Disconnected: bye');
        
    });
})
req.on('error',(err)=>{
    console.log('Error client... '+ err.message);
    
})

req.on('connection',() => {
        console.log('connected');
        
    })

    req.end()
//}, 2000)