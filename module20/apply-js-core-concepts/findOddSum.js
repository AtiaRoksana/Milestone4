function getSumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        // const element = numbers[i];
        const element = numbers[index];
        sum = sum + element;
        //console.log(index, element, sum);

    }
    return sum;
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // if (element % 2 === 0) {
        //     continue;
        // }
        // else {
        //     console.log(index, element)
        // }
        if (element % 2 !== 0) {
            console.log(index, element)
            oddNumbers.push(element);
        }


    }
    return oddNumbers;

}

const myNumners = [12, 45, 64, 32, 56, 45, 67, 87, 42, 23];
const oddNumbers = getOddNumbersOfAnArray(myNumners);
console.log(oddNumbers);

//getSumOfArray(myNumners);

const oddNumbersSum = getSumOfArray(oddNumbers);
console.log('odd number sum', oddNumbersSum);