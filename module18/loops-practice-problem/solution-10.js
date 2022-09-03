// module 17.09 Practice problem 1 solution

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

// fruits[1] = 'Mango';
fruits[bananaIndex] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

// module 17.09 Practice problem 2 solution

var Names = ['Myself', 'Tom', 'Jane', 'Peter', 'John']
var Marks = [85, 66, 95, 56, 40];
// NameLength = Names.length;
// console.log(NameLength);

for (i = 0; i < Marks.length; i++) {
    var mark = Marks[i];
    var Name = Names[i];

    console.log(Name);
    console.log(mark);

    if (mark >= 80) {
        console.log("A grade");

    }


    else if (mark >= 60) {
        console.log("B grade");

    }

    else if (mark >= 50) {
        console.log("C grade");

    }

    else if (mark >= 40) {
        console.log("D grade");

    }

    else if (mark <= 39) {
        console.log("f grade");

    }
    console.log(" ")
}

// module 17.09 Practice problem 3 solution

var num1 = 113;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("largest number is :", num1);
    }
    else {
        console.log("largest number is :", num2);
    }
}

// else if (num2 > num3) {
//     console.log("largest number is :", num2);

// }

// else {
//     console.log("largest number is :", num3);
// }

// alternative way
else {
    if (num2 > num3) {
        console.log("largest number is :", num2);
    }
    else {
        console.log("largest number is :", num3);
    }
}


// module 17.09 Practice problem 4 solution

var side1 = 9;
var side2 = 8;
var side3 = 10;

if (side1 == side2 || side1 == side3 || side3 == side1) {
    console.log('Isoscoeles');
}
else {
    console.log('Not Isoscoeles');
}

