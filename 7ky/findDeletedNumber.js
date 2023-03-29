function findDeletedNumber(arr, mixArr) {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    let sum2 = 0;
    for (let i = 0; i < mixArr.length; i++) {
        sum2 += mixArr[i];
    }
    return sum1 - sum2;
}