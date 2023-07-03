function accum(s) {
    const result = [];

    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        const repeatedLetter = letter.repeat(i + 1);
        result.push(repeatedLetter.charAt(0).toUpperCase() + repeatedLetter.slice(1));
    }

    return result.join("-");
}