function rentalCarCost(days) {
    let dayCost = 40;

    let discount = 0;
    if(days >= 3) discount += 20;
    if(days >= 7) discount += 30;

    return dayCost * days - discount;
}