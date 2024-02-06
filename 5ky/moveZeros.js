function moveZeros(arr) {

    let nonZero = [];
    let zeros = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZero.push(arr[i]);
        }
    }
    return nonZero.concat(zeros);
}