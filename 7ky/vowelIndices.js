function vowelIndices(word){
    const vowels = "aeiouyAEIOUY";
    const result = [];

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            result.push(i + 1);
        }
    }

    return result;
}