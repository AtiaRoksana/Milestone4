const userName = 'blackPink';
const userInput = 'blackPinK';

if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());
console.log(userInput.toLocaleUpperCase());