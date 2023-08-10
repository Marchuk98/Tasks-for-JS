function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function coprimes(n) {
    const result = [];

    for (let k = 1; k < n; k++) {
        if (gcd(n, k) === 1) {
            result.push(k);
        }
    }

    return result;
}