function sumOfMinimums(arr) {
    let sum = 0;
    for (let row of arr) {
        let min = row[0];
        for (let value of row) {
            if (value < min) {
                min = value;
            }
        }
        sum += min;
    }
    return sum;
}