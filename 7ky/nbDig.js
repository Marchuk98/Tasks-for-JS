function nbDig(n, d) {
    let count = 0;

    for (let k = 0; k <= n; k++) {
        const squared = k * k;
        const squaredStr = squared.toString();

        for (let digit of squaredStr) {
            if (digit === d.toString()) {
                count++;
            }
        }
    }

    return count;
}