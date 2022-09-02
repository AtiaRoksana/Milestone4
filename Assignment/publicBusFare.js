// function publicBusFare(totalPeople) {
//     while (totalPeople >= 50) {
//         let busremaining = totalPeople - 50;
//         totalPeople = busremaining;
//     }
//     finalBusRemaining = totalPeople;
//     while (finalBusRemaining >= 11) {
//         let microremaining = finalBusRemaining - 11;
//         finalBusRemaining = microremaining;
//     }
//     finalMicroRemaning = finalBusRemaining;
//     publicBusFare = finalMicroRemaning * 250;

//     return publicBusFare;
// }
// console.log(publicBusFare(11));

// let totalPeople = 365;
// while (totalPeople >= 50) {
//     let busremaining = totalPeople - 50;
//     totalPeople = busremaining;
//     //console.log(totalPeople);
// }
// finalBusRemaning = totalPeople;
// //console.log(finalBusRemaning);

// while (finalBusRemaning >= 11) {
//     let microremaining = finalBusRemaning - 11;
//     finalBusRemaning = microremaining;
//     // console.log(microremaining);
// }

// finalMicroRemaning = finalBusRemaning;
// //console.log(finalMicroRemaning);

// publicBusFare = finalBusRemaning * 250;
// console.log(publicBusFare);



function publicBusFare(totalPeople) {
    if (!isNaN(totalPeople)) {
        while (totalPeople >= 50) {
            let busremaining = totalPeople - 50;
            totalPeople = busremaining;
        }
        finalBusRemaining = totalPeople;
        while (finalBusRemaining >= 11) {
            let microremaining = finalBusRemaining - 11;
            finalBusRemaining = microremaining;
        }
        finalMicroRemaning = finalBusRemaining;
        publicBusFare = finalMicroRemaning * 250;

        return publicBusFare;
    }
    else {
        console.log('Please Enter Number........!!');
    }
}
console.log(publicBusFare(112));

