//Factorial: Write a function that takes a number as input and returns
//its factorial using a while loop.

function findFactorial(n){
       let f=1;
    while(n>=1){
        f=f*n;
         n--;
    }
       return f;
}
console.log(findFactorial(6));
console.log(findFactorial(7));
console.log(findFactorial(8));
console.log(findFactorial(9));
console.log(findFactorial(0));
