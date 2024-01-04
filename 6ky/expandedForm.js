function expandedForm(num) {
    const numStr = num.toString();
    const expandedArray = [];

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== '0') {
            const weight = 10 ** (numStr.length - i - 1);
            expandedArray.push(numStr[i] * weight);
        }
    }
    return expandedArray.join(' + ');
}