const sumAll = function(first, last) {
    
    let total = 0;

    if (first < 0 || last < 0){
        return "ERROR";
    }

    if (!Number.isInteger(first) || !Number.isInteger(last)){
        return "ERROR";
    }

    if (first < last){
        for (let i = first; i < last+1; i++){
            total += i;
        }
    } else {
        for (let i = last; i < first+1; i++){
            total += i;
        }
    }

    return total;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;