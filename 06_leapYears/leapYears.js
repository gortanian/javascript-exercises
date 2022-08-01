const leapYears = function(year) {
    // initialize isLeapYear
    let isLeapYear = false;

    // write a function that determines if a year is divisible by another number
    function isDivisibleBy(year, number) {
        if (year % number === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    if (isDivisibleBy(year, 400)) {
        isLeapYear = true;
    }

    else if (isDivisibleBy(year, 100)) {
        isLeapYear = false;
    }

    else if (isDivisibleBy(year, 4)) {
        isLeapYear = true;
    }
    else {
        isLeapYear = false; 
    }
    
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
