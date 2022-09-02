function oilPrice(x, y, z) {

    if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
        let degel = x * 114;
        let pettrol = y * 130;
        let octen = z * 135;
        let total = degel + pettrol + octen;
        return total;
    }
    else {
        console.log('Please Enter Numbers......!!');
    }

}

console.log(oilPrice('e', 6, 8));