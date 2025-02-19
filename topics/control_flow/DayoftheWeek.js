//Day of the Week: Write a function that takes a number (1-7) as input and returns the
//corresponding day of the week (e.g., 1 = "Sunday", 2 = "Monday", etc.). Use a switch statement.

function printDayOftheWeek(number){
    switch(number){
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        case 1:
            return "Sunday"
    }
}
console.log(printDayOftheWeek(1));

