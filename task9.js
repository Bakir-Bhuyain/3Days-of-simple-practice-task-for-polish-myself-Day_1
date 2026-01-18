// ask 9: The Negative Balance (নেগেটিভ সংখ্যার যোগ)

// বিবরণ: ইনপুটে পজেটিভ ও নেগেটিভ দুই ধরনের সংখ্যাই থাকবে। সবগুলোর সাধারণ যোগফল বের করো।

// Input: [100, -20, 30, -50]

// Output: 60 (১০০ - ২০ + ৩০ - ৫০)

function negativeBalance(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
const values = [100, -20, 30, -50];
const value = negativeBalance(values);
console.log(value);
