var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 25
}

console.log(shoppingCart);

// when you know the specificproperty name,use dot notation to get the properties value
var penCount = shoppingCart.pen;


//alternetive system 
//When you know specific property name, use dot notation to get the property value

// third system
var propertyName = 'mouse';
var propertyName = shoppingCart[propertyName];
console.log(propertyName);

var penCount1 = shoppingCart['pen'];

// object  properties
var properties = Object.keys(shoppingCart);
console.log(properties);

// object's properties values

var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);


console.log(propertyName, propertyValue);

// 3 way to set property values
//1
shoppingCart.mouse = 15;
//2
shoppingCart['mouse'] = 29;
//3
shoppingCart[propertyName] = 89;

console.log(shoppingCart);