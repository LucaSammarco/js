// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
  // Your code here

  array = Array.from(str);

  newWord = [];
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    newWord.push(element);
    newWord.push(element);
  }

  newStr = newWord.join("")

  return newStr

}
