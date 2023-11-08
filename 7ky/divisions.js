const divisions = (n, divisor) => {
    let count = 0;
    while (n >= divisor) {
        n /= divisor;
        count++;
    }
    return count;
};