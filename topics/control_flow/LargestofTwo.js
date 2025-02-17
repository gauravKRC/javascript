//Largest of Two: Write a function that takes two numbers
//as input and returns the larger of the two.

function compareTwoNumbers(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(compareTwoNumbers(3,4));
console.log(compareTwoNumbers(37,4));
console.log(compareTwoNumbers(8,8));
