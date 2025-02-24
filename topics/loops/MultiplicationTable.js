//Multiplication Table (nested loops): Write a program that prints
//the multiplication table (up to 10) for all numbers from 1 to 10. Use nested for loops.

for(let i=1;i<=10;i++){
    console.log(`Table of ${i}:`);
    for(let m=1;m<=10;m++){
        console.log(m*i);
    }
}
