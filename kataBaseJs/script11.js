invertNum =  [1, -2, 3, -4, 5];

function invert(invertNum) {
    
    let inverted = [];
    
    invertNum.forEach(element => {
        
       let invertito = element * (-1);

        inverted.push(invertito);

    });
    return inverted;
 }