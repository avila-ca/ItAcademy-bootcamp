import { log } from 'console';
import throttle from './throttle';

let arr:string[] = [];
//let value:string = '';
let i:number = 0;

function doSomething(value:string) {
  console.log(value);
}

const userInput = process.argv[2];

const throttled = throttle(doSomething, userInput);

while(i < 10 ){
  
  console.log(`Calling to function throttle Number: ${i} ...`)
  throttled(userInput);
  i++;
}