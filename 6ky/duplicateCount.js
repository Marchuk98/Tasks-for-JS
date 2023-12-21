function duplicateCount(text){
    const lowerText = text.toLowerCase();

    const charCount = {};

    for (let char of lowerText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let duplicateCount = 0;
    for (let count in charCount) {
        if (charCount[count] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}