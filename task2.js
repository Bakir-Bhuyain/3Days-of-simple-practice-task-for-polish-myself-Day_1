// function multiplication(numbers) {
//   let baseNumber = 1;
//   for (const number of numbers) {
//     baseNumber = baseNumber * number;
//   }
//   return baseNumber;
// }

function multiplication(numbers){
      let totalValue = 1;
      for (let i = 0; i < numbers.length; i++){
            totalValue = totalValue * numbers[i];
      }
      return totalValue;
}

const arr1 = [10, 20, 30, 40, 50, 25];
const total = multiplication(arr1);
console.log(total);
