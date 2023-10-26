function uglifyWord(s) {
    let flag = 1;
    let result = '';

    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) {
            if (flag === 1) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            flag = 1 - flag;
        } else {
            result += char;
            flag = 1;
        }
    }

    return result;
}