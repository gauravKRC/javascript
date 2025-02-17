//Sign Checker: Write a function that takes a number as input
//and returns "positive", "negative", or "zero" based on its sign.

function signChecker(number){

    if(number>0){
        return "positive";
    }else if(number<0){
        return "negative";
    }else{
        return "zero";
    }

}
let n=-8;
console.log(signChecker(n));
