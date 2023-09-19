const net = require('node:net');
const portNumber:number = + process.argv[2];
const date = new Date;

const currentDate = () => {
    let hour:string = '';
    let minute:string = '';
    let day:string = '';
    let month:string = '';


    if ( Number(date.getMonth()) + 1 < 10) 
        month = '0' + (Number(date.getMonth()) + 1).toString();
    else
        month = date.getMonth().toString();

    if (date.getDate() < 10) 
        day = '0' + date.getDate();
    else
        day = date.getDate().toString();

    if(date.getHours() < 10)
        hour = '0' + date.getHours();
    else
        hour = date.getHours().toString();
    if (date.getMinutes() < 10)      
        minute = '0' + date.getMinutes();
    else
        minute = date.getMinutes().toString();
    

    let timeNow = `${date.getFullYear()}-${month}-${day} ${hour}:${minute}\n`;
    
    return timeNow;   
}

const server = net.createServer((socket) => {
    
    socket.end(currentDate());
    socket.on("error", (error) => {
        console.log(`Server Error: ${error.message}`);
    });
})
 
server.listen(portNumber); 



