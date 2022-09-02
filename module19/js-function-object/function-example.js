// function functionName(petameters) {
//     //function body
//     //retun
// }

// var retrnedValue = functionName(parameters value)

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 58;
const assignment2Marks = 30;
const assignment3Marks = 57;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average marks: ', myAverage);

// another example

function add(num1, num2) {
    const sum = num1 + num2
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
