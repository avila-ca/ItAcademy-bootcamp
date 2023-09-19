
const args:string[] = process.argv;

function sum(args:string[]){
    let index = 2;
    let sumargs = 0

    while(index < args.length){
        sumargs += +args[index];
        index++;
    }
    return sumargs;
}
const total = sum(args)
console.log(total);

export default sum

