// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var p = n * 2 - 1;
    var midPoint = Math.floor(p / 2);
    //console.log(midPoint);

    for (let row = 0; row < n; row++) {
        let stairs = '';

        for (let column = 0; column < p; column++) {


            if (midPoint - row <= column && midPoint + row >= column) {
                stairs += '#';
            } else {
                stairs += ' ';
            }
        }

        console.log(stairs);
    }

}

module.exports = pyramid;
