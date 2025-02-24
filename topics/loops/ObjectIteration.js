//Object Iteration: Write a function that takes an object as input and prints each
//key-value pair using a for...in loop.

function iterateObject(obj){
    for(let key in obj){
        console.log(key+":"+obj[key]);
    }
}
const obj={
    name:"mark",
    age:90,
    senile:true
}
iterateObject(obj);
