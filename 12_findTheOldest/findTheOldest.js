const date = new Date();
const currentYear = date.getFullYear();

const findTheOldest = function(people) {
    let oldest = {};

    for (let person of people) {

        if (getAge(person) > getAge(oldest)) {
            oldest = person;            
        }
    }

    return oldest;
};

function getAge(person) {

    let age = 0;

    if ('yearOfBirth' in person) {
        if ('yearOfDeath' in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth;
        }
    }

    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
