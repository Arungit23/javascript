// 4.find the second smallest element in an array.

function findSecondSmallest(array){
if (array.length < 2) {
    return null;
}


let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < array.length; i++) {
 if (array[i] < smallest) {
  secondSmallest = smallest;
  smallest = array[i];
 } else if (array[i] < secondSmallest && array[i] !== smallest) {
  secondSmallest = array[i];
 }
}

if (secondSmallest === Infinity) {
 return null;
}
return secondSmallest;
}


const  input = prompt("enter array element");
const array  = input.split(",").map(item => parseInt(item.trim()));
const secondSmallestNumber = findSecondSmallest(array);
console.log(secondSmallestNumber);

