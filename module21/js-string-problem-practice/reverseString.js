function reverseString(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        console.log(element);
    }
}

const myStryng = ' i am a good girl';
const reversed = reverseString(myStryng);
console.log(reverseString);

// function reverseString(text) {
//     let reversed = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i];
//         reversed = reversed + element; console.log(element, reversed);
//     }
//     return reversed;
// }

// const myStryng = ' i am a good girl';
// const reversed = reverseString(myStryng);
// console.log('reversed output:', reversed);