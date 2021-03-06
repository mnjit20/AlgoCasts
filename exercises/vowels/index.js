// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let count = 0;
    const checker = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (checker.indexOf(char) > -1) {
            count++;
        }
    }
    return count;
}


function vowelsRegex(str) {

    let count = 0;
    const checker = 'aeiou';

    const match = str.match(/[aeiou]/gi);
    //console.log(match);
    return match ? match.length : 0;
}


module.exports = vowelsRegex;
