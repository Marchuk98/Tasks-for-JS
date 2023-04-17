function mergeArrays(arr1, arr2) {

    const result = arr1.concat(arr2)

    result.sort((a,b)=> a-b)

    return [...new Set(result)]
}