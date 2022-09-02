// function isBestFriend(object1, object2) {
//     if (object1.name === object2.friend && object1.friend === object2.name) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const set1 = {
//     name: 'doe',
//     friend: 'alex'
// };

// const set2 = {
//     name: 'john',
//     friend: 'doe'
// };

// const bestFriend = (isBestFriend(set1, set2));

// console.log(bestFriend)

function isBestFriend(object1, object2) {
    if (typeof object1 === 'object' && typeof object2 === 'object') {
        if (object1.name === object2.friend && object1.friend === object2.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.log('Please Enter Object.......!');
    }

}

const set1 = {
    name: 'doe',
    friend: 'alex'
};

const set2 = {
    name: 'john',
    friend: 'doe'
};

const bestFriend = (isBestFriend(set1, set2));

console.log(bestFriend)


// var money = 100;
// var biscuit = 20;
// var milk = 35;
// var bread = 40;
// if (biscuit < money) {
//     console.log('take biscuit ');

// }
// else if (milk < money) {
//     console.log('take milk');

// }
// else if (bread < money) {
//     console.log('take bread ');

// }
// else {
//     console.log('go home');

// }
