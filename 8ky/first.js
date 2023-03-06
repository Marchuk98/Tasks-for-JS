function first(arr, n = 1) {

    let result = []

    for (let i = 0; i < n && i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
}