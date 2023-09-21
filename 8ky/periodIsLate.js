function periodIsLate(last, today, cycleLength) {

    const daysPassed = Math.floor((today - last) / (1000 * 60 * 60 * 24));

    if (daysPassed > cycleLength) {
        return true;
    } else {
        return false;
    }
}