// factorial of a given non-negative integer.

function factorial(n) {
 if ( n === 0 || n === 1 ) {
  return 1;
 } else {
  return n * factorial(n - 1);
 }
}
const number = prompt("enter the number");
const result = factorial(number);
console.log(result);

