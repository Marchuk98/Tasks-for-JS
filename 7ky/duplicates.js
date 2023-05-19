function duplicates(arr) {
    const duplicates = [];
    const encountered = new Set();

    for (let elem of arr) {
        if (encountered.has(elem) && !duplicates.includes(elem)) {
            duplicates.push(elem);
        } else {
            encountered.add(elem);
        }
    }
    return duplicates;
}