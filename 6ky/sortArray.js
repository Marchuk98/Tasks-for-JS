function sortArray(array) {

    const oddNumbers = array.filter(num => num % 2 !== 0);

    const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);

    const result = array.map(num => (num % 2 !== 0 ? sortedOddNumbers.shift() : num));

    return result;
}