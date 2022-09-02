function radianToDegree(radian) {
    degree = radian * 57.2957795;
    return degree;
}

radianInput = radianToDegree(abc);
radianValue = radianInput.toFixed(2);
console.log(radianValue);