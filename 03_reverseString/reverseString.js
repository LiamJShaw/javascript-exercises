const reverseString = function(forwards) {
        
    let backwards = "";
    let length = forwards.length - 1; // Can you not directly use forwards.length in a condition? Never works for me and I can't work out why.

    while (length > -1) {
        backwards += forwards.charAt(length);
        length--;
    }

    return backwards;
};

console.log(reverseString("liam"));

// Do not edit below this line
module.exports = reverseString;
