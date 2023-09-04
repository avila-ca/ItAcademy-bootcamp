import {memoize} from "./memoize";


export const loopFn = (n:number) => {
    let totalLoops = 0;

        for (let index = 0; index < n; index++) {
            for (let indexB = 0; indexB < n; indexB++) {
                totalLoops++;
                
            }
        }
        
        return totalLoops;
}


const memoized = memoize(loopFn);

const userInput:number = +process.argv[2];

console.time('Execution Time');
console.log(memoized(userInput));
console.timeEnd('Execution Time');

console.time('Execution Time');
console.log(memoized(userInput));
console.timeEnd('Execution Time');
