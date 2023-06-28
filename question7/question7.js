// 7. to calculate the power of a number recursively.

function power(base, exponent) {
 if (exponent === 0 ) {
  return 1;
 } else if (exponent === 1) {
  return base;
 }else if (exponent < 0 ) {
  return 1 / power(base, -exponent);
 }else {
  return base * power(base, exponent -1);
 }
}


const baseNumber = prompt("enter the number");
const base = parseInt(baseNumber);
const numberExponent = prompt("enter the exponent");
const exponent = parseInt(numberExponent)
const result = power(base, exponent);
console.log(result);