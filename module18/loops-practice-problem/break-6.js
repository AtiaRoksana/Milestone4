// // 'break' in for loop
for (var i = 0; i <= 20; i++) {

    if (i > 10) {
        break;
    }
    console.log(i);
}

// //break in while loop
var rostGiven = 0;
while (rostGiven < 10) {
    console.log('gime me some');
    rostGiven++;
    if (rostGiven > 4) {
        break;
    }
}
// //break in for loop (for string)
var items = ['bottol', 'pomet', 'mouse', 'sunglass', 'pen', 'paper', 'laptop'];
for (i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'sunglass') {
        break;
    }
    console.log(item);
}

//break in for loop (for numbers)
var numbers = [45, 86, 94, 84, 85, 82, 83, 23, 13, 133];
for (var i = 0; i < numbers.length; i++) {
    var number = (numbers[i]);
    if (number > 100) {
        break;
    }
    console.log(number);

}