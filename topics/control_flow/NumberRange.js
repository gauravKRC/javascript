//Number Range: Write a function that takes a number as input and returns a string indicating
//which range it falls into (e.g., 0-10, 11-20, 21-30, etc.).

console.log("Input number nust be greater than 0");
function findRange(n){
    if(n>10){
          let tens=n/10;
          let t = Math.floor(tens);
          let ll=((t*10)+1);
          let ul=((t*10)+10);

        if(n<ll){
            return `${ll-10}-${ul-10}`;
        }else{
            return `${ll}-${ul}`;
        }
    }else{
        return "0-10";
    }

}

console.log(findRange(3));

