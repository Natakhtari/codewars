// Description:
//
//     Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//

//SOLUTION:

function XO(str) {
    const lowerStr = str.toLowerCase();
    const countX = (lowerStr.match(/x/g) || []).length;
    const countO = (lowerStr.match(/o/g) || []).length;
    return countX === countO;
}

console.log('solution:  ', XO('ooxXm'));