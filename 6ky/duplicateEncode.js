function duplicateEncode(word){
    const charCount = new Map();

    for (const char of word.toLowerCase()) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    let result = '';
    for (const char of word.toLowerCase()) {
        result += charCount.get(char) > 1 ? ')' : '(';
    }

    return result;
}
