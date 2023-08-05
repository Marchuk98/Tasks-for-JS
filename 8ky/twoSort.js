function twoSort(s) {
    const sortedArray = s.slice().sort();
    const firstWord = sortedArray[0];
    const result = firstWord.split('').join('***');
    return result;
}