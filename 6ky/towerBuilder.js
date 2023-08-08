function towerBuilder(nFloors) {
    const tower = [];
    const maxWidth = 2 * nFloors - 1;

    for (let i = 1; i <= nFloors; i++) {
        const numStars = 2 * i - 1;
        const numSpaces = (maxWidth - numStars) / 2;

        const floor = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
        tower.push(floor);
    }

    return tower;
}