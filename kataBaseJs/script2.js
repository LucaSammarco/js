// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


let s = "Hello, Luca!!! Welcome to the world of JavaScript programming!!! It's amazing!!!";


function removeExclamationMarks(s) {

   s = s.replaceAll("!", "")
 

   return s;
 }

 document.getElementById("demo").innerHTML = removeExclamationMarks(s);

 