const palindromes = function (word) {

    let cleanWord = removePunctuation(word);

    let reverse = reverseString(cleanWord);

    return cleanWord.toLowerCase() === reverse.toLowerCase();
};

function removePunctuation(string) {
    
    const allowedChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                          'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result = string;

    for (let i = 0; i < string.length; i++) {
        if (!allowedChars.includes(string[i])) {
            result = result.replace(string[i], '');
        }
    }

    return result;
}

function reverseString(word) {
    reverse = "";

    for (i = word.length-1; i >= 0; i--) {
        reverse = reverse + word[i];
    }

    return reverse;
}

console.log(palindromes("H,e.l£l$o!"));

// Do not edit below this line
module.exports = palindromes;
