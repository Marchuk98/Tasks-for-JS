function every(arr, interval = 1, start = 0) {

    let result = [];

    start = Math.max(start, 0);

    for (let i = start; i < arr.length; i += interval) {
        result.push(arr[i]);
    }

    return result;
}
