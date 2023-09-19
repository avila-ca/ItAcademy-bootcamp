const http = require('http');

const postData = JSON.stringify({
    'msg': 'Hello World!',
  });
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
  };

const req = http.request(options, (res) => {
    /* console.log(`STATUS: ${res.statusCode}`);
     console.log(`HEADERS: ${JSON.stringify(res.headers)}`); */
    res.setEncoding('utf8');
    res.on('error', (err) => {
      console.log('Error in client side: ' + err.message);
      
    })
    res.on('data', (chunk) => {
      console.log(`\nReturned to the client: ${chunk}\n`);
    });
     res.on('end', () => {
      console.log('No more data in response.');
    });
  });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  

  req.write('pruebas');
  req.end();