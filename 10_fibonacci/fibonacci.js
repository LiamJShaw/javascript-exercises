const fibonacci = function(number) {

    console.log("NUMBER: " + number)

    if (number < 2) {
        return number;
    } else {
        return fibonacci(number-1) + fibonacci(number-2); // Final return value after all the recursive calls have resolved to 1
    }
};

console.log(fibonacci(100));

// Do not edit below this line
module.exports = fibonacci;
