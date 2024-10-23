// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){

    array = Array.from(x);

    let bin = [];

    array.forEach(element => {
        
        if (element < 5) {
            bin.push("0")
        } else {
            bin.push("1")
        }


    });

    return bin.join("")
}