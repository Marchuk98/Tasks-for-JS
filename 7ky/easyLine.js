function easyLine(n) {
    let result = 1;
    for (let k = 1; k <= n; k++) {
        result *= (n + k) / k;
    }
    return Math.round(Math.log(result));
}