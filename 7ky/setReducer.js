function setReducer(input) {
    while (input.length > 1) {
        const result = [];
        for (let i = 0; i < input.length; i++) {
            let count = 1;
            while (i + 1 < input.length && input[i] === input[i + 1]) {
                count++;
                i++;
            }
            result.push(count);
        }
        input = result;
    }
    return input[0];
}