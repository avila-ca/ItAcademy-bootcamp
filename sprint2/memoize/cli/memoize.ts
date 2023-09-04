
export const memoize = (loopFn:Function) => {

  let cache:number[] = [];
  
  return (n:number)=>{

      if(cache[n]){
          return cache[n];
      }else{
          cache[n] = loopFn(n);
          return cache[n];
      }
  }
}
