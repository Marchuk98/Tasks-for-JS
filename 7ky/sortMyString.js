function sortMyString(S) {

    let odd = '';
    let even = '';

    for (let i = 0; i < S.length; i++) {
        if (i % 2) {
            odd += S[i]
        } else {
            even += S[i]
        }
    }
    return even + " " + odd
}