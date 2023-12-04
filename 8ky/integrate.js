function integrate(coefficient, exponent) {
    const newCoefficient = coefficient / (exponent + 1);
    const newExponent = exponent + 1;
    return `${newCoefficient}x^${newExponent}`;
}