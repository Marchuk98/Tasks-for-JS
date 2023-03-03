function sumMul(n, m) {
    if (n <= 0 || m <= 0) {
        return "INVALID";
    }
    let result = 0;

    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            result += i
        }
    }
    return result
}