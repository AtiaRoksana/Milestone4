function isEven(num) {
    const remainder = num % 2;
    if (remainder === 0) {
        // console.log('number is even');
        return true
    }
    else {
        // console.log('number is odd');
        return false;
    }
}

const myNumner = isEven(126);
console.log(myNumner);