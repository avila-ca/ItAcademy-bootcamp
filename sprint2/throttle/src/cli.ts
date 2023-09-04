import { log } from 'console';
import throttle from './throttle';

let arr:string[] = [];
//let value:string = '';
let i:number = 0;

function doSomething(value:string) {
  console.log(`\n\n     Destiny function invoked with argv "${value}"\n\n`);
}

const userInput = process.argv[2];

const throttled = throttle(doSomething, userInput);

while(i < 10 ){
  
  console.log(`Calling - ${i} times - to function throttle with argv "${userInput}" ...`)
  throttled(userInput);
  i++;
}