classPoints = [70, 85, 78, 90, 66, 88, 76];

yourPoints = 79;




function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];

  }

let average = sum / classPoints.length;

if (yourPoints > average) {

    return true

    
}

else {

    return false
}
}

// console.log(betterThanAverage(classPoints, yourPoints));