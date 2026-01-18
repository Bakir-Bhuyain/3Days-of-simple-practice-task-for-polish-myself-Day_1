// Task 8: The Modulus Counter (ভাগশেষ দিয়ে গোনা)

// বিবরণ: একটা অ্যারেতে অনেক সংখ্যা আছে। এর মধ্যে কয়টা সংখ্যা ৩ দিয়ে বিভাজ্য (Divisible by 3), সেটা গুনে বের করো। (যোগফল না, সংখ্যাটা গুনবে)।

// Input: [3, 5, 9, 12, 7]

// Output: 3 (কারণ ৩, ৯, ১২—এই তিনটা সংখ্যা ৩ দিয়ে ভাগ যায়)

function modulusCounter(numbers) {
  let totalModulus = 0;
  for (let i = 0; i < numbers.length; i++) {
    let arr = numbers[i];
    if (arr % 3 === 0) {
      totalModulus++;
    }
  }
  return totalModulus;
}

const input = [3, 5, 9, 12, 7];
const output = modulusCounter(input);
console.log(output);
