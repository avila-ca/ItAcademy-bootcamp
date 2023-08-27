import debounce from './debounce';

let arr:string[] = [];
let value:string = '';
let i:number = 0;

function doSomething() {
  console.log("I am doing something " + arr.join(''))
}

const debounced = debounce(doSomething, value, arr)

const userInput = process.argv[2];

while(i < userInput.length ){
  debounced(userInput.charAt(i++), arr);
}