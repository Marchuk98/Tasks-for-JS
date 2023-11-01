function billboard(name, price = 30){
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        total = addPrice(total, price);
    }
    return total;
}

function addPrice(total, price) {
    let sum = total;
    for (let i = 0; i < price; i++) {
        sum++;
    }
    return sum;
}