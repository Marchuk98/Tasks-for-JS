function sumOfDifferences(arr) {
    let result = 0;
    for(let i = 1; i < arr.length; i++){
        result += Math.abs(arr[i] - arr[i - 1]);
    }
    return result
}