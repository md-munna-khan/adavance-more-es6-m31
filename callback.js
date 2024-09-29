function greeting(greetingHandler,name){
    greetingHandler(name)
}
// const number = [45,45,6767,4];
// const number = {brand:"laptop", price:445435};

function greetingHandler(name){
    console.log('good morning',name)
}
greeting(greetingHandler,"raju")