export const memoize = ()=>{
    let i = 0;

    return ()=>{
        console.log('hello world' + i);
        i++;
    }
}
