// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade(s1, s2, s3) {
    
    let gradeAvg = (s1 + s2 + s3) / 3;

    let grade = "";

    if (gradeAvg >= 90 && gradeAvg <= 100) {
        grade = "A";
    } else if (gradeAvg >= 80 && gradeAvg < 90) {
        grade = "B";
    } else if (gradeAvg >= 70 && gradeAvg < 80) {
        grade = "C";
    } else if (gradeAvg >= 60 && gradeAvg < 70) {
        grade = "D";
    } else if (gradeAvg >= 0 && gradeAvg < 60) {
        grade = "F";
    }

    return grade;
}
