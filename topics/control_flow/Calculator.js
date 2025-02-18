//Calculator: Write a simple calculator program that takes two numbers and
//an operator (+, -, *, /) as input and performs the corresponding operation.1 Use a switch statement.
/*
function calculate(n1,n2,op){
    if(op === "+"){
        return n1+n2;
    }else if(op === "-"){
        return n1-n2;
    }else if(op === "*"){
        return n1*n2;
    }else if(op === "/"){
        return n1/n2;
    }
}*/
function calculate(n1,n2,op){
    switch(op){
        case "+":
            return n1+n2;
            break;
        case "-":
            return n1-n2;
            break;
        case "*":
            return n1*n2;
            break;
        default:              //case "/":
            return n1/n2;

    }
}
console.log(calculate(88,11,"+"));
console.log(calculate(88,11,"-"));
console.log(calculate(88,11,"*"));
console.log(calculate(88,11,"/"));
