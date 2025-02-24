//Pattern Printing: Write a program that prints a pattern of stars
//(e.g., a triangle, a square, etc.) using nested loops.

let r=5;

for(let i=0;i<r;i++){  // #row decider
         let stars="";
    for(let j=0;j<5;j++){  // #column
        if(i===0 || i===r-1 ){
          stars += " *";
        }else {
            if(j===0 || j===r-1){
            stars += " *";
            }else{
                stars += "  ";
            }

        }
    }
    console.log(stars);
}


let n=7;

for(let i=1;i<=n;i++){
    let stars = "";
    for(let j=1;j<=(n-i);j++){
        stars += " ";
    }
        //stars += "*";
    for(let k=1;k<=i;k++){
        stars += "*";
    }
    console.log(stars);
}





















