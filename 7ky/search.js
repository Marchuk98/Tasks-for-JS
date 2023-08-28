function search(budget, prices) {

    const affordablePrices = prices.filter(price => price <= budget);
    const sortedPrices = affordablePrices.sort((a, b) => a - b);
    return sortedPrices.join(',');

}