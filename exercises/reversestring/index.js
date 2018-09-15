// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//reverse with array helper function
function reverse(str) {

    var string = str.split("").reverse("").join('')

    console.log('Reversed', string);

    return string;

}


function reverseUsingForLoop(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
        console.log(reversed);
    }
    return reversed
}


function reverseUsingReduce(str) {

    return str.split('').reduce((reversed, character) => {
        console.log(' character ' + character + ' reversed ' + reversed);
        return character + reversed;
    }
        , '');

    //    console.log('rev with :', rev);
    //  return rev;
}



module.exports = reverseUsingReduce;
