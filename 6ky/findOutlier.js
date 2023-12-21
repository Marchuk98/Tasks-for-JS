function findOutlier(integers){
    let evenCount = 0;
    let oddCount = 0;
    let lastEven, lastOdd;

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenCount++;
            lastEven = integers[i];
        } else {
            oddCount++;
            lastOdd = integers[i];
        }

        if (evenCount > 1 && oddCount === 1) {
            return lastOdd;
        } else if (oddCount > 1 && evenCount === 1) {
            return lastEven;
        }
    }

    return null;
}