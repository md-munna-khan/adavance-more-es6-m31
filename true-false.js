/**
 * truthy
 * 1.true
 * 2.any number (+ve,-ve) will be truthy other than 0
 * 3.any string other than empty string
 * 4.'0', "false"
 * 5.{}
 * 6.[]
 * 
 * falsy
 * 1.false
 * 2.0
 * 3. empty string
 * 4.undefined
 * 5.null
 */
const x = [];
if(x){
    console.log("value of x truthy")
}else{
    console.log("value of x is falsy")
}

//optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy')
}
// check truthy
const n = 50;
if(!!n){
    console.log('value is truthy')
}