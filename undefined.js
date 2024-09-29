/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined 
 * 2.function with no return
 * 3.parameter that is not passed will be undefined
 * 4.if return has nothing on the right side will return
 * 5. property  that doesnot exist on an object will give you undefined
 * 6.accessing array elements outside or of the index range will give undefined
 * 7.deleting an element inside an array
 * 8.  set a value directly undefined
 */



//1
let first;
// console.log(first)

//2
function second(a,b){
    const total = a + b;
}
const result = second()
//3
function third(a,b,c,d){
const total = a+b+c+d;
console.log(a, b, c, d)
}
// third(4,6)

//4
function noNegative  (a,b){
    if(a <0 || b<0){
        return
    }
    return a + b;
}
const total =noNegative(2,-4)
// console.log(total)
//5
const fifth = {id:54, name:"ajaira",age:40}
// console.log(fifth.age,fifth.salary)
//6
const sixth = [23,54,75,3,5,43]
//7
delete sixth[3];
console.log(sixth[3], sixth[8])

//8
const eight = undefined// you used null