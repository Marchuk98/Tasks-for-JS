function evil(n) {
    let binary = n.toString(2);

    let countOnes = [...binary].reduce((acc, digit) => acc + (digit === '1'), 0);

    if (countOnes % 2 === 0) {
        return "It's Evil!";
    }

    return "It's Odious!";
}