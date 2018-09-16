// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const chars = {};
    for (let char of str) {
        //console.log(char);
        if (!chars[char]) {
            Chars[char] = 1;
        } else {
            Chars[char]++;
        }
    }
}

module.exports = maxChar;
