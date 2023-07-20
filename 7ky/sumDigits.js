function sumDigits(number) {
    const numStr = Math.abs(number).toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i], 10);
        sum += digit;
    }
    return sum;
}
