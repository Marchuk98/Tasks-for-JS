function createTwoSetsOfEqualSum(n) {
    const total_sum = (n * (n + 1)) / 2;
    if (total_sum % 2 !== 0) {
        return [];
    }

    const set1 = [];
    const set2 = [];

    let remaining_sum = total_sum / 2;
    for (let number = n; number > 0; number--) {
        if (remaining_sum - number >= 0) {
            set1.push(number);
            remaining_sum -= number;
        } else {
            set2.push(number);
        }
    }

    return [set1, set2];
}