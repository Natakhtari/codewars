// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//     Example 1:
//
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
// Example 2:
//
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []

//SOLUTION

function inArray(a1, a2) {
    let result = [];

    for (let s1 of a1) {
        for (let s2 of a2) {
            if (s2.includes(s1) && !result.includes(s1)) {
                result.push(s1);
                break;
            }
        }
    }

    result.sort();
    return result;
}

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let result1 = inArray(a1, a2);
console.log('solution:   ', result1);