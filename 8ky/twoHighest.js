function twoHighest(arr) {
    let uniqueArr = [...new Set(arr)];
    let sortedArr = uniqueArr.sort((a, b) => b - a);
    return sortedArr.slice(0, 2);
}