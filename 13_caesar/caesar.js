const caesar = function(string, key) {

    const lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                               'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    const upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                               'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let result = "";;

    if (key < 0) { 
        key = 26 + key;
    }

    for (let char of string) {
        if (lowerCaseAlphabet.includes(char)) {
            result = result + lowerCaseAlphabet[ (lowerCaseAlphabet.indexOf(char) + key) % 26 ];
        } else if (upperCaseAlphabet.includes(char)) {
            result = result + upperCaseAlphabet[ (upperCaseAlphabet.indexOf(char) + key) % 26 ];
        } else {
            result = result + char;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;
