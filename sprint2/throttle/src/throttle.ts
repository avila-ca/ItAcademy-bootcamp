
export default function throttle(func:Function, value:string, delay = 2000) {
  let timeoutId:any;
  
  return function(value:string) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(value);        
      }, delay); 
  }
}

