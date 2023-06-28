// 5. check if two arrays are equal (contain the same elements in the same order).

function areArrayEqual(array1, array2) {
 if (array1.length !== array2.length) {
 }

 for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
   return false;
  }
 }

 return true;
}


const input1 = prompt("enter array elements 1");
const array1 = input1.split(",").map(item => parseInt(item.trim()));

const input2 = prompt("enter array elements 2");
const array2 = input2.split(",").map(item => parseInt(item.trim()));

console.log(areArrayEqual(array1, array2))