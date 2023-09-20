function taxCalculator(total) {
    if (typeof total !== 'number' || total <= 0) {
        return 0;
    }

    let tax = 0;

    if (total <= 10) {
        tax = total * 0.10;
    } else if (total <= 20) {
        tax = (10 * 0.10) + ((total - 10) * 0.07);
    } else if (total <= 30) {
        tax = (10 * 0.10) + (10 * 0.07) + ((total - 20) * 0.05);
    } else {
        tax = (10 * 0.10) + (10 * 0.07) + (10 * 0.05) + ((total - 30) * 0.03);
    }

    return Math.round(tax * 100) / 100;

}