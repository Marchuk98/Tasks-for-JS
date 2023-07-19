function intRac(n, guess) {
    const e = 1;
    const approximations = [guess];

    while (true) {
        const newGuess = Math.floor((guess + n / guess) / 2);
        if (Math.abs(newGuess - guess) < e) {
            break;
        }
        guess = newGuess;
        approximations.push(guess);
    }

    return approximations.length;
}