// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


let weight = 75;
let height = 1.77; 


function bmi(weight, height) {

    let sqHeight = height * height;
    console.log(sqHeight);
    let bmi = weight / sqHeight;

    if (bmi <= 18.5 ) {

      return "Underweight"
    }

    if (bmi <= 25.0) {

      return "Normal"
    }

    if (bmi <= 30.0) {

      return "Overweight"
    }
    
    if (bmi > 30.0) {

      return "Obese"
    }
    
  }