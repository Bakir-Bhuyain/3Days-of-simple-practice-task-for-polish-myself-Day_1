function average(numbers) {
  let averageNumber = 0;
  for (let number of numbers) {
    averageNumber += number;
  }
  let value = numbers.length;
  // console.log(value);
  let total = averageNumber / value;
  return total;
}

const arr1 = [10, 20, 30, 40, 50, 25];
const arr = average(arr1);
console.log(arr);
