var searchArray = function (arrayToSearch, query) {
    if (!Array.isArray(arrayToSearch) || !Array.isArray(query) || arrayToSearch.some(subArray => !Array.isArray(subArray) || subArray.length !== 2) || query.length !== 2) {
        throw new Error('Invalid input');
    }

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
            return i;
        }
    }

    return -1;
}