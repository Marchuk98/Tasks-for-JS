function findArray(arr1, arr2) {

    if (arr1.length === 0 || arr2.length === 0) {
        return [];
    }

    const result = [];
    const lastIndex = arr1.length - 1;

    for (const index of arr2) {
        if (index <= lastIndex) {
            result.push(arr1[index]);
        }
    }
    return result;
}