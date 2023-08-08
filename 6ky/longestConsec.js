function longestConsec(strarr, k) {
    const n = strarr.length;

    if (n === 0 || k > n || k <= 0) {
        return "";
    }

    let longest = "";

    for (let i = 0; i <= n - k; i++) {
        const currentConsec = strarr.slice(i, i + k).join('');

        if (currentConsec.length > longest.length) {
            longest = currentConsec;
        }
    }

    return longest;
}