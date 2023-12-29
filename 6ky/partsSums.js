function partsSums(ls) {
    const result = [];
    let sum = 0;

    for (const num of ls) {
        sum += num;
    }

    for (const num of ls) {
        result.push(sum);
        sum -= num;
    }

    result.push(0);

    return result;
}