function mango(quantity, price){
    const numberOfFreeMangoes = Math.floor(quantity / 3);
    const totalCost = (quantity - numberOfFreeMangoes) * price;
    return totalCost;
}