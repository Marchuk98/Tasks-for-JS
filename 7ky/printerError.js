function printerError(s) {
    const errorCount = s.split('').reduce((count, char) => {
        if (char > 'm') {
            return count + 1;
        }
        return count;
    }, 0);

    return `${errorCount}/${s.length}`;
}