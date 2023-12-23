function avgArray(arr) {
    if (arr.length === 0 || arr[0].length === 0) {
        return [];
    }

    const numRows = arr.length;
    const numCols = arr[0].length;
    const averages = new Array(numCols).fill(0);

    for (let col = 0; col < numCols; col++) {
        let columnSum = 0;

        for (let row = 0; row < numRows; row++) {
            columnSum += arr[row][col];
        }

        averages[col] = columnSum / numRows;
    }

    return averages;
}