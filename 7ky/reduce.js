function reduce(fraction) {
    const [numerator, denominator] = fraction;

    const gcd = findGcd(numerator, denominator);

    return [numerator / gcd, denominator / gcd];
}

function findGcd(a, b) {
    return b ? findGcd(b, a % b) : a;
}