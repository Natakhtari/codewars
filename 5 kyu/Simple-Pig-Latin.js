// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation
// marks untouched.
//     Examples
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


//SOLUTION

function pigIt(str) {
    let words = str.split(' ');
    let result = words.map(word => {
        if (word.match(/[a-zA-Z]/)) {
            return word.slice(1) + word[0] + 'ay';
        } else {
            return word;
        }
    });

    return result.join(' ');

}

console.log("Solution: ",pigIt('Pig latin is cool'));