// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {


    for (let row = 0; row < n; row++) {
        let stairs = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stairs += '#';
            } else {
                stairs += ' ';
            }
        }

        console.log(stairs);
    }


}


// using recusrion method
function steps2(n, row = 0, step = '') {
    if (n === row) {
        return;
    }
    if (n === step.length) {
        console.log(step);
        steps2(n, row + 1);
        return;
    }

    if (step.length <= row) {
        step += '#';
    } else {
        step += ' ';
    }
    steps2(n, row, step);
}


module.exports = steps2;
