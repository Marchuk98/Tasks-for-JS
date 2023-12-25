function decode(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
    function decodeLetter(letter) {
        if (letter === ' ') {
            return ' ';
        }
        const index = reversedAlphabet.indexOf(letter);
        return alphabet[index];
    }
    const decodedMessage = message.split('').map(decodeLetter).join('');
    return decodedMessage;
}