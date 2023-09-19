const net = require('node:net');

const client = net.Socket();

client.connect('3000', 'localhost', () => {
    console.log('Connected at:');
    
});

client.on('data', (chunk) => {
    console.log(chunk.toString());
    
})

client.on('end', () => {
    console.log('Disconnected: Bye!');
    
})

client.on('error', (err) => {
    console.log('Error... ' + err.message);
    
})

