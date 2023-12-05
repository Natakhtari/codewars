// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):
//
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


//SOLUTION

function camelCase(str) {
    let lowerCase = str.toLowerCase();
    let result = lowerCase.split(' ');
    let result1 = [];
    result.forEach(res => {
        return result1.push((res.charAt(0).toUpperCase() + res.slice(1)));
    } )
    return result1.join('');
}
console.log('solution: ', camelCase('say hello'));

//SOLUTION AS METHOD

String.prototype.camelCase = function () {
    let lowerCase = this.toLowerCase();
    let result = lowerCase.split(' ');
    let result1 = [];

    result.forEach(res => {
        result1.push(res.charAt(0).toUpperCase() + res.slice(1));
    });

    return result1.join('');
};

console.log("Solution: ",'camel case word'.camelCase());


