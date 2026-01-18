function squareSum (numbers){
      let sumSquare = 0;
      for (const number of numbers){
            let square = number*number;
            // console.log(square);
            sumSquare =sumSquare + square;
            // console.log(sumSquare)
      }
      return sumSquare;
}


const num = [4, 5];
const total = squareSum(num);
console.log(total);