// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


const numeroRipetizioni = 5;
let stringSaluto = "Ciao";

function repeatStr (numeroRipetizioni, stringSaluto) {

    let String = "";

    for (let index = 0; index < numeroRipetizioni; index++) {
        String = String.concat(stringSaluto)
        
    }



    return String;
  }

  document.getElementById("demo").innerHTML = removeExclamationMarks(s);