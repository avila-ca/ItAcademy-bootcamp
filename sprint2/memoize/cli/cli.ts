import {memoize} from "./memoize";


const loopFn = (n:number) => {
    let totalLoops = 0;

        for (let index = 0; index < n; index++) {
            for (let indexB = 0; indexB < n; indexB++) {
                totalLoops++;
                
            }
        }
        return totalLoops;
}


const memoized = memoize(loopFn);

console.time();
console.log(memoized(12));
console.timeEnd();

console.time();
console.log(memoized(12));
console.timeEnd();