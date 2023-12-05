// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
//

//SOLUTION

function domainName(url){

    let sourceStr = url.replace('http://' , '').replace('www.', '').replace('http://', '').split(/[/?#]/)[0];
    return sourceStr.split('.')[0];
}
console.log('solution:  ', domainName("http://youtube.com"));
console.log('solution:  ', domainName("www.xakep.ru"));
console.log('solution:  ', domainName("http://google.co.jp"));
