// module 16.10 Practice problem 1 solution
var monyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var expense = applePrice + orangePrice;
console.log(expense);

var getBack = monyGiven - expense;
console.log(getBack);

// module 16.10 Practice problem 2 solution
// mathematics, Biology,Chemistry, Physics, and Bangla

var mathMarks = 99;
var biologyMarks = 71;
var chemistryMarks = 51;
var PhysicsMarks = 77;
var BanglaMarks = 63;

var totalMarkes = mathMarks + biologyMarks + chemistryMarks + PhysicsMarks + BanglaMarks;
console.log(totalMarkes);

var avarage = totalMarkes / 5;
console.log(avarage);

var avarageTwoDecimal = avarage.toFixed(2);
console.log(avarageTwoDecimal);

var num = parseFloat(avarageTwoDecimal);
console.log(num);

// module 16.10 Practice problem 3 solution

var firstString = 'I am going to be';
var secondString = 'an awesome web developer'

var finalString = firstString + ' ' + secondString;
console.log(finalString);

// module 16.10 Practice problem 4 solution

var number = 119;
var reminder = number % 5;
console.log(reminder);