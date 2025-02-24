//Array Iteration: Write a function that takes an array as input and prints each element
//of the array using a for...of loop.

function iterateArray(array){
    for(let element of array){
        console.log(element);
    }
}
const array=[1,2,3,4,5];
iterateArray(array);
