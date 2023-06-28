// 9. to find the number of occurrences of a substring in a given string.
// Sample Input: ("Hello, hello, hello", "hello");
// Sample Output: 3


function countSubstringOccurrences(string, sunstring) {
 const regex = new RegExp(substring, 'g');
 const matches = string.match(regex);
 return matches ? matches.length : 0;
}

const string = prompt("enter the string");
const substring = prompt("enter the sub string");
const count = countSubstringOccurrences(string, substring);
console.log(count);