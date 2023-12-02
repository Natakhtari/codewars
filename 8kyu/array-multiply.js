// Description:
//
//     Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//

//SOLUTION
function grow(x){
    let result = 1;
    x.forEach(res =>{
        result = result *res;
    })
    return result
}

console.log('solution: ', grow([1, 2, 3, 4]));