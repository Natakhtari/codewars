// Given an array of integers, return a new array with each value doubled.
//
//     For example:
//
//     [1, 2, 3] --> [2, 4, 6]

//SOLUTION

function maps(x) {
    let newArr = [];
    x.map(res => {
        res = res * 2;
        newArr.push(res)
    })
    return newArr;
}


console.log('solution: ', maps([2, 2, 2, 2, 2, 2]));

