//Fibonacci Series: Write a program that prints the first n numbers of the Fibonacci series.

//0,1,1,2,3,5,8,13....

function fibonacciSeries(n){
      let pf=0;
      console.log(pf);
      let ps=1;
      console.log(ps);

     for(let i=1;i<=n-2;i++){
        let fs=pf+ps;
           console.log(fs);
        pf=ps;
        ps=fs;
    }
}

fibonacciSeries(10);


