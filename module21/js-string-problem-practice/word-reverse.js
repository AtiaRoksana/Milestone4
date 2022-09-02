// function reverseWord(str) {
//     const words = str.split(' ');
//     const result = [];
//     for (i = words.length - 1; i >= 0; i--) {
//         const element = words[i];
//         result.push(element);
//     }
//     console.log(result);
// }
// const myStryng = 'I am a good boy';
// reverseWord(myStryng);


function reverseWord(str) {
    const words = str.split(' ');
    const result = [];
    for (i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myStryng = 'I am a good boy';
reversed = reverseWord(myStryng);
console.log(reversed);
