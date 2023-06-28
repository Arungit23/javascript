// find the maximum element in an array.

function findMaxElement(array) {
 if (array.length === 0) {
  return null;
 }

let max = array[0];

for (let i = 1; i < array.length; i++) {
 if (array[i] > max) {
  max = array[i];
 }
}

 return max;
}

    const input = prompt("enter array elements");
    const array = input.split(",").map(item => parseInt(item.trim()));
    console.log(array)
    const maxNumber = findMaxElement(array);
    console.log(maxNumber);