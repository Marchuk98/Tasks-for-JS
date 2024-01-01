function canIMeasure(a, b, c) {
    if (c > Math.max(a, b)) {
        return false;
    }

    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    const gcdValue = gcd(a, b);
    return c % gcdValue === 0;
}