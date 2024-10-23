// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  // your code
  newWord = ""

  for (const element of s1) {
    if (newWord.includes(element) === false) {

      newWord += element;


    }
  }

  for (const element of s2) {
    if (newWord.includes(element) === false) {

      newWord += element;


    }
  }

  return newWord.split("").sort().join("")

}