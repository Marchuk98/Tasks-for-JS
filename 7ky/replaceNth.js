function replaceNth(text, n, oldValue, newValue) {
    if (n <= 0 || text.indexOf(oldValue) === -1) {

        return text;
    }

    let count = 0;
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === oldValue) {
            count++;

            if (count === n) {
                result += newValue;
                count = 0;
            } else {
                result += text[i];
            }
        } else {
            result += text[i];
        }
    }

    return result;
}