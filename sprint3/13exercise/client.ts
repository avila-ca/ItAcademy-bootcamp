const http = require('http');

let d = new Date()

const options = {
  hostname: 'localhost', 
  port: 3000,            
  path: `/api/unixtime?iso=${d.toISOString()}`,
  method: 'GET',       
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`\nResponse from server to the client side:\n ${data}`);
  });
});

req.on('error', (error) => {
  console.error(`Error en la solicitud: ${error.message}`);
});

req.end();
