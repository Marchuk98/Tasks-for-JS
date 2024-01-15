function beginning(xs) {
    const strLength = xs.length;

    for (let i = 1; i <= strLength / 2; i++) {
        const startNumber = parseInt(xs.substring(0, i));
        let current = startNumber;
        let result = "";

        while (result.length < strLength) {
            result += current++;
        }

        if (result === xs) {
            return startNumber;
        }
    }

    return parseInt(xs);
}