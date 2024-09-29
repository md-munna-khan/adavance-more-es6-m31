function sum(a, b, c){

    //arguments array like object
    // console.log(arguments[0])
    const args = [...arguments]
    // console.log(args)
    const result = a + b + c;
    return result
}
const total= sum(45,65,56,345,44,4,7);
console.log(sum.length)