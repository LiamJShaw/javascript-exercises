const repeatString = function(string, amount) {

    if (amount < 0) {

        return "ERROR";

    } else {
        let returnString = "";

        for (let i = 0; i < amount; i++) {
            returnString+= string;
        }
        return returnString;
    }        
};

// Do not edit below this line
module.exports = repeatString;
