// Task 7: The Character Counter (অক্ষর গণনা)

// বিবরণ: একটা শব্দের অ্যারে দেওয়া আছে। সব শব্দ মিলিয়ে মোট কয়টা অক্ষর (character) আছে বের করো। (হিন্ট: arr[i].length ব্যবহার করো)।

// Input: ["Hello", "World", "JS"]

// Output: 12 (5 + 5 + 2)

// for (let count of counts) {
//   if (count.length > totalChar) {
//     console.log(count);
//     totalChar = count;
//   }
// }
function charCounter(counts) {
  let totalChar = 0;
  for (let i = 0; i < counts.length; i++) {
    let length = counts[i].length;
    totalChar += length;
  }
  return totalChar;
}
const givenArray = ["Hello", "World", "JS"];
const total = charCounter(givenArray);
console.log(total);
