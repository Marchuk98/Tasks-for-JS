function mostFrequentItemCount(collection) {
    if (collection.length === 0) {
        return 0;
    }

    let countMap = {};

    for (let num of collection) {
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    }

    let maxCount = Math.max(...Object.values(countMap));

    return maxCount;
}