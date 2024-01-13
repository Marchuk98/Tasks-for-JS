function baseFinder(seq){
    let uniqueDigits = new Set();
    seq.forEach(numStr => {
        for (let digit of numStr) {
            uniqueDigits.add(digit);
        }
    });

    return uniqueDigits.size;
}