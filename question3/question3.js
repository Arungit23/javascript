// remove a specific element from an array.

function removeElementFromArray(array, element) {
 const index = array.indexOf(element);
 console.log(index)

 if (index !== -1) {
  array.splice(index, 1);
 }

 return array;
}


const input = prompt("enter array elements");
const array = input.split(",").map(item => parseInt(item.trim()));
const element = prompt("enter the number to remove ")
const elementToRemove = parseInt(element)
const updatedArray = removeElementFromArray(array, elementToRemove);
console.log(updatedArray);

