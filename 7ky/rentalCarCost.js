function rentalCarCost(d) {
    let daily_cost = 40;
    let total_cost = d * daily_cost;

    if (d >= 7) {
        total_cost -= 50;
    } else if (d >= 3) {
        total_cost -= 20;
    }

    return total_cost;
}