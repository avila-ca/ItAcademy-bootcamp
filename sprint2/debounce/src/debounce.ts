
export default function debounce(func:Function, value:string, arr:string[] ,delay = 1000) {
  let timeoutId:any;
  
  return function(value:string, arr:string[]) {
    arr.push(value);
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(value, arr)
    }, delay)
  }
}

