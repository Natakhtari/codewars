// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:
//
//     Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
//
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
// Example
//
// "#FF9933" --> {r: 255, g: 153, b: 51}
//


//SOLUTION

function hex2Rgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16) ;
    console.log(r,g,b);
    return {r , g , b};
}

console.log('solution:  ',hex2Rgb("#FF9933"));