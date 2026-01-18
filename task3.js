// String Join: অ্য ['Hello', ' ', 'World']।
function stringJoin (strings){
      let joinedString = '';
      for (const string of strings){
           joinedString += string;
      }
      return joinedString;
}



const stringIs = ["Hello", " ", "World"];
const total = stringJoin(stringIs);
console.log(total);