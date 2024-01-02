function cantBeatSoJoin(numbers) {

    numbers.sort((a, b) => b.reduce((sum, num) => sum + num, 0) - a.reduce((sum, num) => sum + num, 0));

    const result = numbers.reduce((acc, currentArray) => acc.concat(currentArray), []);

    return result;

}