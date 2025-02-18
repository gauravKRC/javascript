//Leap Year Checker: Write a function that takes a year as input and
//returns true if it's a leap year, and false otherwise.

function isLeapYear(year){
  const feb29 = new Date(year, 1, 29);
    console.log(typeof feb29);
//return feb29.getMonth() === 1;
    if(feb29.getMonth()===1){
        return true;
    }else{
        return false;
    }
}

   console.log( isLeapYear(1086));

