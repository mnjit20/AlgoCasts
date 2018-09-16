// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    var str1 = getCharMap(stringA);
    console.log('str1 ', stringA, ' ', str1);
    var str2 = getCharMap(stringB);
    console.log('str1 ', stringB, ' ', str2);


    if (Object.keys(str1).length !== Object.keys(str2).length) {
        return false;
    } else {
        for (let val in str1) {
            console.log('checking ', val);
            if (str1[val] !== str2[val]) {
                return false;
            }
        }
    }

    return true;


}

function getCharMap(str) {
    chars = {};

    for (val of str.replace(/[^\w]/g, "").toLowerCase()) {
        chars[val] = chars[val] + 1 || 1;

    }
    return chars;
}


//solution 2

function anagrams2(stringA, stringB) {

    var str1 = getCharMap2(stringA);
    console.log('str1 ', stringA, ' ', ' Now its: ', str1);
    var str2 = getCharMap2(stringB);
    console.log('str2 ', stringB, ' ', ' Now its: ', str2);

    if (str1 != str2) {
        return false;
    }

    return true;


}
function getCharMap2(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams2;
