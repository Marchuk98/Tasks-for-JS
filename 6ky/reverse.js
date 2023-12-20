function reverse(str) {
    const words = str.trim().split(/\s+/);

    const reversedWords = words.map((word, index) => (index % 2 === 1 ? reverseWord(word) : word));

    return reversedWords.join(' ');
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}