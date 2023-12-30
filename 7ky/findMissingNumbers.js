function findMissingNumbers(arr){
    if (!arr || arr.length === 0) {
        return [];
    }

    const missingNumbers = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];

        if (nextNum - currentNum > 1) {
            for (let missingNum = currentNum + 1; missingNum < nextNum; missingNum++) {
                missingNumbers.push(missingNum);
            }
        }
    }

    return missingNumbers;
}