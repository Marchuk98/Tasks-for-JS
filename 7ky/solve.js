function solve(s) {

    let lower = 0;
    let upper = 0;

    for (const item of s) {
        if (item === item.toLowerCase()) {
            lower++
        } else {
            upper++
        }
        return lower < upper ? s.toUpperCase() : s.toLowerCase()
    }
}