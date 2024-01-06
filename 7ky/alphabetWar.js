function alphabetWar(fight)
{
    const leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    const rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };

    const leftScore = fight.split('').reduce((score, char) => score + (leftSide[char] || 0), 0);
    const rightScore = fight.split('').reduce((score, char) => score + (rightSide[char] || 0), 0);

    return leftScore > rightScore
        ? "Left side wins!"
        : rightScore > leftScore
            ? "Right side wins!"
            : "Let's fight again!";
}