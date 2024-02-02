function cdnf(truthTable) {
    const n = truthTable[0].length - 1;
    const minterms = [];

    for (const row of truthTable) {
        if (row[n] === 1) {
            const terms = row.slice(0, n).map((value, index) => (value === 0 ? `~x${index + 1}` : `x${index + 1}`));
            minterms.push(`(${terms.join(' * ')})`);
        }
    }

    return minterms.join(' + ');
}