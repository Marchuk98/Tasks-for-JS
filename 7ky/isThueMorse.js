function isThueMorse(seq) {
    let tmSequence = [0];

    while (tmSequence.length < seq.length) {
        tmSequence = tmSequence.concat(tmSequence.map(x => 1 - x));
    }
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] !== tmSequence[i]) {
            return false;
        }
    }
    return true;
}