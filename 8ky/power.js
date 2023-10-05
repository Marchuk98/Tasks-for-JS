function power(x,y){
    if (x === 0 && y === 0) return 1;
    if (x === 0) return 0;
    if (y === 0) return 1;

    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}