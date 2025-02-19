//Quadratic Equation Solver: Write a function that takes the coefficients (a, b, c) of a
//quadratic equation (ax^2 + bx + c = 0) as input and returns the roots (real or complex).
//(This one is more mathematically involved).

function quadEqnSolver(a,b,c){
    let D=(b*b)-(4*a*c);
    if(D>=0){
        let S=Math.sqrt(D);

       let r1=(-b+S)/(2*a);
       let r2=(-b-S)/(2*a);
        return {r1,r2};
    }else{
        D=-1*D;
        let R1={
            I:Math.sqrt(D)/(2*a),
            R:-b/(2*a)
        }
        let R2={
            I:Math.sqrt(D)/(2*a),
            R:-b/(2*a)
        }
        let r1=`${R1.R}+${R1.I}i`;
        let r2=`${R2.R}-${R2.I}i`;
        return {r1,r2};
    }
}
console.log(quadEqnSolver(1,-7,10));
console.log(quadEqnSolver(1,-6,13));
console.log(quadEqnSolver(6,-6,2));
console.log(quadEqnSolver(1,-6,1));

