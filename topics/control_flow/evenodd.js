//Even or Odd: Write a function that takes a number
//as input and returns "even" or "odd".

function evenOddChecker(number){
    if(number%2==0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(evenOddChecker(1));
console.log(evenOddChecker(-4));
console.log(evenOddChecker(73));
console.log(evenOddChecker(80));
