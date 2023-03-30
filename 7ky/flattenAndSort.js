function flattenAndSort(array) {

    let result = []

    for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i])
    }

    result.sort((a, b) => a - b)

    return result;
}