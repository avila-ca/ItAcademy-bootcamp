const http = require('node:http');
const bl = require('bl')  
const url = process.argv[2];


http.get(url, (res) =>{ 
    let data = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) =>{
        data += chunk;
        
    });
    res.on('end', async () => {
        console.log(data.length);
        
        console.log(data.toString());
    })

    }).on('error', (err) =>{
    console.log("Error: " + err.message);
});


/*
http.get(url, function (response) {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  });
*/