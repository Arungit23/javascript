 // to sort an array of numbers in ascending order.

 function sortArrayAscending(array) {
  return array.slice().sort(function(a, b) {
   return a - b;
  });
 }

 const input = prompt("enter the array elements");
const array = input.split(",").map(item => parseInt(item.trim()));
const sortedNumbers = sortArrayAscending(array);
console.log(sortedNumbers);
