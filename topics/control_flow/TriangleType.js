//Triangle Type: Write a function that takes the lengths of three sides of a
//triangle as input and returns "equilateral", "isosceles", or "scalene".

function typeOfTriangle(l1,l2,l3){
    if(l1===l2 && l2===l3){
        return "equilateral";
    }
    else if(l1===l2 || l2===l3 || l1===l3){
        return "isosceles";
        }else{
            return "scalene";
        }
    }
console.log(typeOfTriangle(45,67,34));
console.log(typeOfTriangle(48,8,48));
console.log(typeOfTriangle(45,67,45));
console.log(typeOfTriangle(7,7,7));



