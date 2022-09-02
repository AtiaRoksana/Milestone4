function isLeepYear(year) {
    const remainder = year % 2;
    if (remainder === 0) {
        // console.log('your year is leap year ', year);
        return true
    }
    else {
        // console.log('your year is leap not year ', year);
        return false;
    }
}
const myYear = isLeepYear(1998);
console.log('my year', myYear);
// isLeepYear(1933);