import { timeEnd } from "console";

export const memoize = (factorial:Function) => {

    let cache:number[] = [];
    
    return (n:number)=>{
        if(cache[n]){
            return cache[n];
        }else{
            cache[n] = factorial(n);
            return cache[n];
        }
    }
}
