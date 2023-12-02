// Description:
//
//     Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

//SOLUTION

function invert(numbers) {
    const inverseArray = [];
    for (let i = 0; i < numbers.length; i++) {
        inverseArray.push(-numbers[i]);
    }
    return inverseArray;
}

console.log('solution: ', invert([1, 2, 3, 4, 5]));

