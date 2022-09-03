var numbers = [45, 86, 94, 84, 85, 82, 83, 23, 13, 133];
for (var i = 0; i < numbers.length; i++) {
    var number = (numbers[i]);
    if (number > 90) {
        continue; //skip
    }
    console.log(number);

}