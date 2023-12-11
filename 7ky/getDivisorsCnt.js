function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += 2;
        }
    }

    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        count--;
    }

    return count;
}