// Task 6: The Decimal Sum (দশমিকের যোগ)
// বিবরণ: পূর্ণ সংখ্যার বদলে এবার দশমিক সংখ্যা যোগ করো।
// Input: [2.5, 3.5, 4.0, 1.5]
// Output: 11.5

function addition (numbers){
      let total = 0;
      for (let number of numbers){
            total+=number;
      }
      return total;
}
const values = [2.5, 3.5, 4.0, 1.5];
const add = addition(values);
console.log(add)