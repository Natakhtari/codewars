// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!
//
//     For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.
//
// You may assume that the input will always be valid.
//     Examples
//
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

//SOLUTION

function lastDigit(a, b) {
    if (a === "0" && b === "0") {
        return 1;
    } else {
        let base = BigInt(a);
        let exponent = BigInt(b);
        let result = 1n;

        while (exponent > 0n) {
            if (exponent % 2n === 1n) {
                result = (result * base) % 10n;
            }

            base = (base * base) % 10n;
            exponent /= 2n;
        }

        return Number(result);
    }
}

console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
