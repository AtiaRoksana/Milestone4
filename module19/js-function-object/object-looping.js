//array vs object
var shopingItem = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];

var friendsAge = [12, 45, 32, 54, 32, 34, 23];

var friendsAge = {
    hem: 12,
    hema: 45,
    hira: 32,
    hia: 54,
    atu: 32,
    sadu: 34,
    samu: 23
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const Values = Object.values(shoppingCart);
console.log(Values);


