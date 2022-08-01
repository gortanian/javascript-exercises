const sumAll = function(int1, int2) {
    // returns the sum of all numbers in-between and including int1 and int2

    // check if int1 and int2 are actually numbers
    if (typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR";
    }

    // check if int1 or int2 are negative
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    // check if int1 is greater than int2, if so, swap them
    if (int1 > int2) {
        let temp = int1; 
        int1 = int2;
        int2 = temp;
    }

    // initialize a variable called sum
    let sum = 0;

    // for numbers between int1 and int2, inclusive, add them to the sum. 
    for (i = int1; i <= int2; i++) {
        sum += i;
    }

    // return the sum 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
