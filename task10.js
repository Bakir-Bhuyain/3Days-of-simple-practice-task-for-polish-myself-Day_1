// Task 10: The Array Builder (নিজে অ্যারে বানাও)

// বিবরণ: ফাংশন একটা সংখ্যা n ইনপুট নেবে (যেমন: 5)। তোমাকে ১ থেকে n পর্যন্ত সংখ্যার একটা অ্যারে বানিয়ে রিটার্ন করতে হবে। (হিন্ট: লুপ চালিয়ে push করতে হবে)।

// Input: 5

// Output: [1, 2, 3, 4, 5]
function buildArray(numbers) {
  let total = [];
  for (let i = 1; i <= numbers; i++) {
      total.push(i);
  }
  return total;
}
const arrai = buildArray(5);
console.log(arrai);
