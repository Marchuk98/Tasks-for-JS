function makeLatinSquare(n) {
    const square = [];

    for (let i = 0; i < n; i++) {
        square.push([]);
        const previousRow = square[i - 1] || [];

        for (let j = 0; j < n; j++) {
            let num = previousRow[(j - 1 + n) % n] || 0;
            num = (num % n) + 1;
            square[i].push(num);
        }
    }

    return square;
}