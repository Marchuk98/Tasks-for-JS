function expressionMatter(a, b, c) {
    const combination1 = a * (b + c);
    const combination2 = a * b * c;
    const combination3 = a + b * c;
    const combination4 = (a + b) * c;
    const combination5 = a + b + c;

    return Math.max(combination1, combination2, combination3, combination4, combination5);
}