// 10. to find the intersection of two arrays without duplicates.
// Sample Input: ([1, 2, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]


function findArrayIntesection(array1, array2) {
 const set1 = new Set(array1);
 const  intersection = [];

 for (let element of array2) {
  if (set1.has(element)) {
  intersection.push(element);
  set1.delete(element);
 }
}

return intersection;

}

const input1 = prompt("enter array elements 1");
const array1 = input1.split(",").map(item => parseInt(item.trim()));

const input2 = prompt("enter array elements 2");
const array2 = input2.split(",").map(item => parseInt(item.trim()));
const intersection = findArrayIntesection(array1, array2);
console.log(intersection);