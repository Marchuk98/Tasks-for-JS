function calculateYears(principal, interest, tax, desired) {
    let years = 0;

    while (principal < desired) {
        const annualInterest = principal * interest;
        const taxedInterest = annualInterest * (1 - tax);
        principal += taxedInterest;
        years++;
    }

    return years;
}