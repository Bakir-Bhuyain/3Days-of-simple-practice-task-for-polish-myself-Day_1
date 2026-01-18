// function sumOfArray(values){
//       let total = 0;
//       for (let value of values){
//             let perValues =value;
//             total = total + perValues;
//       }
//       return total;
// }

function sumOfArray(values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total =total+ values[i];
  }
  return total;
}
const arr1 = [10, 20, 30, 40, 50, 25];
const arr = sumOfArray(arr1);
console.log(arr);
