function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => Math.pow(parseInt(digit), 2)).join(''));
}