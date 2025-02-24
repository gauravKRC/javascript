//Prime Number Checker: Write a function that takes a number as input and returns true
//if it's a prime number, and false otherwise.

function checkPrime(n){
       if(n==2){
         return true;
        }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
        if(i==n-1){
            return true;
        }
    }
}
console.log(checkPrime(97));
console.log(checkPrime(2));
console.log(checkPrime(98));
console.log(checkPrime(103));
