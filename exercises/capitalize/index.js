// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var n = [];

    aa = str.split(' ');
    for (val in aa) {
        aa[val] = aa[val][0].toUpperCase() + aa[val].slice(1);
    }

    return aa.join(' ');

}

module.exports = capitalize;
