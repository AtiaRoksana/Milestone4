// const tipCalculator = (quality, total) => {

//     if (quality = 'bad') {

//         return (5 * total) / total;

//     }
//     if (quality = "ok") {

//         return (15 * total) / total;
//     } if (quality = "‘good’") {

//         return (20 * total) / total;
//     } if (quality = "‘excellent’") {

//         return (30 * total) / total;
//     } defult: {

//         return (18 * total) / total;
//     }

// }

function publicBusFare(totalPeople) {
    if (typeof totalPeople === 'number') {
        while (totalPeople >= 50) {
            let busremaining = totalPeople - 50;
            totalPeople = busremaining;
        }
        finalBusRemaining = totalPeople;
        while (finalBusRemaining >= 11) {
            let microRemaining = finalBusRemaining - 11;
            finalBusRemaining = microRemaining;
        }
        finalMicroRemaning = finalBusRemaining;
        publicBusFare = finalMicroRemaning * 250;
        return publicBusFare;
    }
    else {
        console.log('Please Enter Number........!!');
    }
}

console.log(publicBusFare(365));