// Description:
//
//     Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

//SOLUTION

function squareSum(x) {
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        result += x[i] ** 2;
    }
    return result;
}

console.log('solution: ', squareSum([0, 3, 4, 5]));

